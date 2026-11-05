const GITHUB_USERNAME = "desanyasandu";
const CACHE_KEY = `github-repos:${GITHUB_USERNAME}`;
const CACHE_TTL_MS = 60 * 60 * 1000;

const IGNORED_REPOS = [
  "skills-copilot-codespaces-vscode",
];

export interface GithubRepo {
  id: string;
  name: string;
  description: string;
  language: string | null;
  url: string;
  homepage: string | null;
}

interface RawRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  fork: boolean;
}

const readCache = (): GithubRepo[] | null => {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { at, repos } = JSON.parse(raw) as { at: number; repos: GithubRepo[] };
    return Date.now() - at < CACHE_TTL_MS ? repos : null;
  } catch {
    return null;
  }
};

const writeCache = (repos: GithubRepo[]) => {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos }));
  } catch {
    // storage unavailable (private mode, quota): the cache is optional
  }
};

export const fetchGithubRepos = async (signal?: AbortSignal): Promise<GithubRepo[]> => {
  const cached = readCache();
  if (cached) return cached;

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`,
      { signal }
    );
    if (!response.ok) throw new Error("Failed to fetch repositories");

    const raw = (await response.json()) as RawRepo[];
    const repos = raw
      .filter((repo) => !repo.fork && repo.description && !IGNORED_REPOS.includes(repo.name.toLowerCase()))
      .map((repo) => ({
        id: String(repo.id),
        name: repo.name.replace(/[-_]+/g, " "),
        description: repo.description ?? "",
        language: repo.language,
        url: repo.html_url,
        homepage: repo.homepage || null,
      }));

    writeCache(repos);
    return repos;
  } catch (error) {
    if ((error as Error).name !== "AbortError") {
      console.error("Error fetching GitHub repos:", error);
    }
    return [];
  }
};
