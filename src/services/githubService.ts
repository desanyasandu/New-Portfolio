import { Project } from "../types/portfolio";

const GITHUB_USERNAME = "desanyasandu";

// Fallback images based on programming language for a modern look
const LANGUAGE_IMAGES: Record<string, string> = {
  TypeScript: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2000",
  JavaScript: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000",
  Java: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000",
  Python: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000",
  HTML: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000",
  default: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000"
};

export const fetchGithubProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);
    if (!response.ok) throw new Error("Failed to fetch repositories");
    
    const repos = await response.json();
    
    // Filter out forks and repositories without descriptions (usually small tests)
    return repos
      .filter((repo: any) => !repo.fork && repo.description)
      .map((repo: any) => ({
        id: repo.id.toString(),
        title: repo.name.replace(/-/g, ' '),
        description: repo.description || "Exciting project in development.",
        tech: [repo.language].filter(Boolean),
        link: repo.homepage || repo.html_url,
        github: repo.html_url,
        image: LANGUAGE_IMAGES[repo.language as string] || LANGUAGE_IMAGES.default
      }));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
};
