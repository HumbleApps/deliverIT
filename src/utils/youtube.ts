export const getId = (url: string) => url.split('/').pop();

export const getThumbnailUrl = (url: string) => {
  const videoId = getId(url);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return thumbnailUrl;
};

export const getYoutubeLink = (url: string) => {
  const videoId = getId(url);

  return `https://www.youtube.com/watch?v=${videoId}`;
};
