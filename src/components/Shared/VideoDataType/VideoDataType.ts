import { Url } from 'url';

export interface VideoDataType {
  etag: string;
  id: { kind: string; videoId: string };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: Date;
    publishedAt: Date;
    thumbnails: {
      default: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
    };
    title: string;
  };
}

export interface Videos {
  nextPageToken: string;
  prevPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };

  items: VideoDataType[];
  views: number;
  duration: string;
  uploaded_at: string;
}
