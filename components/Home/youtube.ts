export function getYouTubeVideoId(url: string): string | null {
  if (!url.trim()) return null;

  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
    /(?:youtube\.com\/shorts\/)([\w-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }

  return null;
}

export function getYouTubeEmbedUrl(
  url: string,
  options: {
    autoplay?: boolean;
    mute?: boolean;
    loop?: boolean;
    controls?: boolean;
  } = {},
): string | null {
  const id = getYouTubeVideoId(url);
  if (!id) return null;

  const {
    autoplay = false,
    mute = false,
    loop = false,
    controls = true,
  } = options;

  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });

  if (autoplay) params.set("autoplay", "1");
  if (mute) params.set("mute", "1");
  if (loop) {
    params.set("loop", "1");
    params.set("playlist", id);
  }
  if (!controls) {
    params.set("controls", "0");
    params.set("showinfo", "0");
    params.set("iv_load_policy", "3");
    params.set("disablekb", "1");
  }

  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}
