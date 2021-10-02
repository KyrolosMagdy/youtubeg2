export interface ChannelDataType {
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };

  items: {
    id: string;
    statistics: {
      viewCount: number;
      subscriberCount: number;
      hiddenSubscriberCount: boolean;
      videoCount: number;
    };
    snippet: {
      title: string;
      description: string;
      publishedAt: Date;
      thumbnails: {
        default: { url: string; width: number; height: number };
        medium: { url: string; width: number; height: number };
        high: { url: string; width: number; height: number };
      };
      localized: {
        title: string;
        description: string;
      };
      country: string;
    }[];
  };
}
