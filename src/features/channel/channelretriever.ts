export async function getChannel(channelId?: string) {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet&part=statistics&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
    {
      method: 'GET',
    }
  );
  const channel = await res.json();
  console.log('videos we are getting: ', channel);
  return channel;
}
