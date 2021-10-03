import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getVideos } from './searchVideosAPI';
import { Videos } from '../../components/Shared/VideoDataType/VideoDataType';

export interface VideosState {
  value: Videos | {};
  status: 'idle' | 'loading' | 'failed' | 'successed';
  pageNumber: number;
  nextPageToken: string;
  resultsPerPage: number;
}

const initialState: VideosState = {
  value: {},
  status: 'idle',
  pageNumber: 0,
  nextPageToken: '',
  resultsPerPage: 10,
};

export const fetchVideos = createAsyncThunk(
  'videos/getVideos',
  async (q?: string) => {
    const response: Videos = await getVideos(q);
    return response;
  }
);

export const fetchMoreVideos = createAsyncThunk(
  'videos/fetchMoreVideo',
  async (pageToken: string) => {
    const response: Videos = await getVideos(pageToken);
    return response;
  }
);

export const videosSlides = createSlice({
  name: 'videos',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = 'successed';
        state.value = action.payload;
        state.pageNumber += 1;
        state.nextPageToken = action.payload.nextPageToken;
      })
      .addCase(fetchVideos.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchMoreVideos.fulfilled, (state, action) => {
        state.value = {
          ...state.value, //@ts-ignore
          items: [...state.value.items, ...action.payload.items],
        };
      });
  },
});

export const videos = (state: RootState) => state.videos.value;
export const pageNumber = (state: RootState) => state.videos.pageNumber;
export const nextPageToken = (state: RootState) => state.videos.nextPageToken;
export const resultsPerPage = (state: RootState) => state.videos.resultsPerPage;
export const videosState = (state: RootState) => state.videos.status;


export default videosSlides.reducer;
