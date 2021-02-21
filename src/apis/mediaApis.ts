import DOMAINS from 'constants/domains';
import { fetchPost } from 'utils/fetch';

import { ImageType } from 'types/mediaTypes';

export const IMAGE = `${DOMAINS.MEDIA}/images`;

/**
 * Uploads image to server
 * @param images
 */
export const uploadImage = async (formData: FormData): Promise<ImageType[]> =>
  await fetchPost({
    url: IMAGE,
    data: formData,
  });
