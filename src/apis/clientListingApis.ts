import DOMAINS from 'constants/domains';

import { fetchPost, fetchGet } from 'utils/fetch';

import {
  ClientListingFetchResponse,
  ClientListingFetchPayload,
  UpdateClientListingPayload,
  ClientListingType,
} from 'types/clientListingTypes';
import { QuoteType } from 'types/quotesTypes';

import { RecommendedBy } from 'constants/bookings';

const FETCH_CLIENTS = `${DOMAINS.MARKETPLACE}/clientlistings/clientlistingsforpartner`;
const UPDATE_CLIENT_LISTING = `${DOMAINS.MARKETPLACE}/clientlisting/:id/quotes`;
const FETCH_CLIENTS_LISTING_BY_ID = `${DOMAINS.MARKETPLACE}/clientlisting/:id`;

export const fetchClientList = (
  payload: ClientListingFetchPayload,
): Promise<ClientListingFetchResponse> =>
  fetchPost({
    url: FETCH_CLIENTS,
    data: {
      ...payload,
    },
  });

export const updateClientListing = (
  payload: UpdateClientListingPayload,
): Promise<QuoteType> => {
  const { id, ...rest } = payload;
  return fetchPost({
    url: UPDATE_CLIENT_LISTING.replace(':id', id),
    data: {
      ...rest,
      recommended_by: rest.recommended_by || RecommendedBy.system,
    },
  });
};

export const fetchClientById = async (
  id: string,
): Promise<ClientListingType> => {
  const url = FETCH_CLIENTS_LISTING_BY_ID.replace(':id', id.toString());
  return await fetchGet({
    url: url.replace(':id', id.toString()),
  });
};
