import DOMAINS from 'constants/domains';
import { fetchGet, fetchPost } from 'utils/fetch';
import { HubType } from 'types/hubTypes';

export const HUBS_IDS = `${DOMAINS.FO}/hubs`;
export const CLIENT_HUBS = `${DOMAINS.FO}/hubs/:id`;

/**
 * Fetches hubs based on hubs ids
 *
 * @param ids hubs ids
 */
export const fetchHubsByIds = async (ids: string[]): Promise<HubType[]> =>
  await fetchPost({
    url: HUBS_IDS,
    data: { hub_id: ids },
  });

/**
 * Fetches hubs by client_id
 *
 * @param id client id
 */
export const fetchHubsByClientId = async (id: number): Promise<HubType[]> =>
  await fetchGet({
    url: `${CLIENT_HUBS.replace(':id', id.toString())}`,
  });
