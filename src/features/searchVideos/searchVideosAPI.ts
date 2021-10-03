export async function getVideos(
  q?: string,
  resultsPerPage: number = 10,
  pageToken?: string
) {
  let res;
  if (q && q.length > 0) {
    res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&maxResults=${resultsPerPage}&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
      {
        method: 'GET',
      }
    );
  } else if (pageToken && pageToken.length) {
    res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${resultsPerPage}&pageToken=${pageToken}&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
      {
        method: 'GET',
      }
    );
  } else {
    res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${resultsPerPage}&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
      {
        method: 'GET',
      }
    );
  }

  const videos = await res.json();
  console.log('videos we are getting: ', videos);
  return videos;
}
