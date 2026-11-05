export interface VideoEmbed {
  type: 'linkedin' | 'youtube' | 'video' | 'external';
  embedUrl: string;
  externalUrl: string;
}

const LINKEDIN_URN = /ugcPost[-:](\d+)|activity[-:/](\d+)/i;
const YOUTUBE_ID = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
const VIDEO_FILE = /\.(mp4|webm|ogg)(\?.*)?$/i;

export const resolveVideoEmbed = (url?: string): VideoEmbed | null => {
  if (!url) return null;

  if (url.includes('linkedin.com')) {
    const match = url.match(LINKEDIN_URN);
    if (match) {
      const urn = match[1] ? `ugcPost:${match[1]}` : `activity:${match[2]}`;
      return {
        type: 'linkedin',
        embedUrl: `https://www.linkedin.com/embed/feed/update/urn:li:${urn}`,
        externalUrl: url,
      };
    }
  }

  const youtube = url.match(YOUTUBE_ID);
  if (youtube) {
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube-nocookie.com/embed/${youtube[1]}?autoplay=1&rel=0`,
      externalUrl: url,
    };
  }

  if (VIDEO_FILE.test(url)) {
    return { type: 'video', embedUrl: url, externalUrl: url };
  }

  return { type: 'external', embedUrl: url, externalUrl: url };
};
