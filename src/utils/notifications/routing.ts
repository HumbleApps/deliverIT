import { ParsedData, NotificationPathTypes } from './types';

import pathNames from 'routes/pathNames';
/**
 * Handles routing on notification tap
 *
 * @param data custom data sent from lt backend
 */
//@ts-ignore
export default (history: History<unknown>, data: ParsedData) => {
  const { path } = data;
  let routeUrl = pathNames.home,
    routeParams: Record<string, any> = {};

  /**
   * Here you build two things
   * 1) route url
   * 2) route params object that you need
   */
  console.log(path, routeUrl);
  switch (path) {
    case NotificationPathTypes.profile: {
      console.log('Route to profile page!');

      routeUrl = pathNames.profile;
      break;
    }

    // This is for demo only, use this as example code
    case NotificationPathTypes.listing: {
      const { listing_id: listingId, recommended_by: recommendedBy } = data;

      if (listingId) {
        routeUrl = `/listing/${listingId}` as pathNames;
        routeParams = {
          recommendedBy,
        };
      }
      break;
    }

    case NotificationPathTypes.payments: {
      routeUrl = pathNames.payments;
      break;
    }

    case NotificationPathTypes.trip_details: {
      const { listing_id: listingId } = data;
      routeUrl = `/trip-details/${listingId}` as pathNames;
    }

    case NotificationPathTypes.client_listing: {
      const {
        client_listing_id: clientListingId,
        recommended_by: recommendedBy,
      } = data;

      if (clientListingId) {
        routeUrl = pathNames.discoveryTripDetails;
        routeParams = {
          recommendedBy,
          clientListingId,
        };
      }
      break;
    }
  }

  history.push(routeUrl, routeParams);
};
