export interface VideoDataType {
  kind: string;
  nextPageToken: string;
  prevPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: {
    title: string;
    link: string;
    description: string;
    thumbnail: string;
    author: {
      name: string;
      ref: string;
      verified: boolean;
    };
    views: number;
    duration: string;
    uploaded_at: string;
  }[];
}
