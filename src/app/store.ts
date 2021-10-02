import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import videosReducer from '../features/searchVideos/searchVideosSlice';
import channelReducer from '../features/channel/channelretrieverSlise';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: videosReducer,
    channel: channelReducer,
    search: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
