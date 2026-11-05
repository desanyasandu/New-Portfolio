const TITLE_SPLIT = ' — ';

/** "Green Dairy — Enterprise Dairy ..." -> "Green Dairy" */
export const projectName = (title: string): string => title.split(TITLE_SPLIT)[0];

/** "Green Dairy — Enterprise Dairy ..." -> "Enterprise Dairy ..." (empty when there is no subtitle) */
export const projectTagline = (title: string): string => title.split(TITLE_SPLIT).slice(1).join(TITLE_SPLIT);

/** "Lead in: the detail" -> { lead, text }; falls back to text only when there is no lead-in. */
export const splitHighlight = (highlight: string): { lead: string; text: string } => {
  const i = highlight.indexOf(': ');
  if (i === -1 || i > 60) return { lead: '', text: highlight };
  return { lead: highlight.slice(0, i), text: highlight.slice(i + 2) };
};
