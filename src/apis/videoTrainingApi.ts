import { fetchPost } from 'utils/fetch';

import {
  GetVideoTrainingPayloadType,
  TrainingVideoType,
} from 'types/videoTrainingTypes';

import DOMAINS from 'constants/domains';

const GET_TRAINING_VIDEOS = `${DOMAINS.REWARD}/api/videolinks/search`;

/**
 * Get video training
 *
 */
export const getTrainingVideos = async (
  payload: GetVideoTrainingPayloadType,
): Promise<TrainingVideoType[]> =>
  await fetchPost({
    url: GET_TRAINING_VIDEOS,
    data: payload,
  });
