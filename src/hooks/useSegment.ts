import TrackEvents from 'constants/trackEvents';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCity,
  selectUserId,
  selectUserLang,
  selectUserPhoneNumber,
  selectUserType,
} from 'selectors/userSelector';
import { ClientListingType } from 'types/clientListingTypes';
import { TripItem } from 'types/tripTypes';
import { UserType } from 'types/userTypes';
import { trackEvent } from 'utils/segment';

type segmentProps = {
  collectData: ClientListingType | TripItem | UserType | {};
  eventName: TrackEvents;
  otherProperties: object;
};

const useSegment = () => {
  const partner_id = useSelector(selectUserId);
  const city = useSelector(selectCity);
  const lang = useSelector(selectUserLang) || '';
  const phone_number = useSelector(selectUserPhoneNumber);
  const partner_type = useSelector(selectUserType);

  const trackEventInSegment: FC<segmentProps> = ({
    collectData,
    eventName,
    otherProperties = {},
  }): any => {
    const commonData = {
      partner_id,
      city,
      phone_number,
      partner_type,
      lang,
    };

    const eventData = {
      ...otherProperties,
      time_stamp: new Date().toString(),
      ...commonData,
      ...collectData,
    };

    trackEvent({
      eventName,
      eventData,
    });
  };

  return {
    trackEventInSegment,
  };
};

export default useSegment;
