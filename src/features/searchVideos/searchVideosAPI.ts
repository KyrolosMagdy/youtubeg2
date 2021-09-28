export async function getVideos(q?: string) {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
    {
      method: 'GET',
    }
  );
  const videos = await res.json();
  console.log('videos we are getting: ', videos);
  return videos;
}
