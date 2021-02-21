import { VTCategory } from 'constants/videoTraining';
import {
  GetVideoTrainingPayloadType,
  TrainingVideoType,
} from 'types/videoTrainingTypes';

export const GET_TRAINING_VIDEOS = 'GET_TRAINING_VIDEOS';
export const SET_TRAINING_VIDEOS = 'SET_TRAINING_VIDEOS';

export type GetTrainingVideos = {
  type: typeof GET_TRAINING_VIDEOS;
  data: GetVideoTrainingPayloadType;
};

export type SetTrainingVideos = {
  type: typeof SET_TRAINING_VIDEOS;
  data: {
    videosMap: TrainingVideoType[];
    category: VTCategory;
  };
};

export const getTrainingVideos = (
  data: GetVideoTrainingPayloadType,
): GetTrainingVideos => {
  return {
    type: GET_TRAINING_VIDEOS,
    data,
  };
};

export const setTrainingVideos = (
  videosMap: TrainingVideoType[],
  category: VTCategory,
): SetTrainingVideos => ({
  type: SET_TRAINING_VIDEOS,
  data: {
    videosMap,
    category,
  },
});

export type VideoTrainingActionsTypes = GetTrainingVideos | SetTrainingVideos;
