import { TicketPayload, TripType } from '/constants/payments';
import { selectCity, selectUserPhoneNumber } from '/selectors/userSelector';
import {
  selectCurrentEarningBreakup,
  selectIssues,
  selectTicketRaisedStatus,
} from '/selectors/paymentSelector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import { ModalNames } from 'modals';
import { Modalize } from 'react-native-modalize';
import formatVehicle from 'utils/formatVehicle';
import { getDateFromEpoch } from '/utils/time';
import { getMonthFromEpoch } from 'utils/time';
import { hideModal } from 'actions/modalActions';
import { raiseFreshdeskTicket } from 'actions/paymentsActions';
import { showModal } from '/actions/modalActions';
import styles from './CustomerModal.styles';
import useI18n from 'hooks/useI18n';
import useSegment from 'hooks/useSegment';
import TrackEvents from 'constants/trackEvents';

const useCustomerCare = () => {
  const dispatch = useDispatch();
  const { translate } = useI18n();
  const modalizeRef = useRef<Modalize>(null);
  const userIssues = useSelector(selectIssues) || [];
  const phone = useSelector(selectUserPhoneNumber);
  const city = useSelector(selectCity);
  const earningBreakup = useSelector(selectCurrentEarningBreakup);
  const ticketRaisedStatus = useSelector(selectTicketRaisedStatus);

  // Track data in Segment
  const { trackEventInSegment } = useSegment();
  const otherProperties = {
    UI_Item: 'Payment - Customer Care',
  };

  const {
    client_name,
    client_id,
    type,
    vehicle_number,
    reference_id,
    start_date,
  } = earningBreakup || {};

  let ticketType: string;
  let tripTime: string;
  let payloadDescription: string;
  let issues: string;

  useEffect(() => {
    modalizeRef.current?.open();
  }, []);

  const handleClosed = () => {
    setTimeout(() => {
      dispatch(hideModal());
    }, 100);
  };

  const modalConfig = {
    bottomLabel: translate('issueRaisedSuccessfully'),
    bottomText: translate('someoneWillGetInTouch'),
    bottomLabelStyle: styles.boldLabel,
    bottomTextStyle: styles.text,
    okBtn: true,
  };

  const createIssuesString = () => {
    let issuesArray = userIssues.map((issue) => {
      return Object.entries(issue).map(([key, value]) => `${key}: ${value}`);
    });

    let issuesString = '';
    issuesString += issuesArray.map((issue) => issue + ' ');
    return issuesString;
  };

  switch (type) {
    case TripType.Scheduled: {
      ticketType = TicketPayload.type.scheduled;
      tripTime = getMonthFromEpoch(start_date);
      issues = createIssuesString();
      payloadDescription = TicketPayload.description.scheduled
        .replace('$vehicle_number', formatVehicle(vehicle_number))
        .replace('$tripTime', tripTime)
        .replace('$issues', issues);
      break;
    }
    case TripType.OnDemand: {
      ticketType = TicketPayload.type.onDemand;
      tripTime = getDateFromEpoch(start_date);
      issues = createIssuesString();
      payloadDescription = TicketPayload.description.onDemand
        .replace('$vehicle_number', formatVehicle(vehicle_number))
        .replace('$tripTime', tripTime)
        .replace('$issues', issues);
      break;
    }
  }

  const createPayload = () => {
    const payload = {
      id: reference_id,
      type: ticketType,
      vehicle_number,
      client_id,
      client_name,
      source: TicketPayload.source,
      city,
      subject: TicketPayload.subject.replace('$city', city),
      description: payloadDescription,
      phone,
    };
    return payload;
  };

  const handleOkPress = () => {
    const payload = createPayload();
    dispatch(raiseFreshdeskTicket(payload));
    logOkPressToSegment(payload);
  };

  const logOkPressToSegment = (payload: any) => {
    const eventData = {
      CustomerCarePayload: payload,
    };
    trackEventInSegment({
      collectData: eventData,
      eventName: TrackEvents.click_ok_raise_issue,
      otherProperties,
    });
  };

  useEffect(() => {
    if (ticketRaisedStatus) {
      dispatch(showModal(ModalNames.SUCCESS_MODAL, modalConfig));
    } else {
      console.log('FAILED:: Raising the Freshdesk Ticket!!');
    }
  }, [ticketRaisedStatus]);

  return {
    userIssues,
    ref: modalizeRef,
    onClosed: handleClosed,
    onOkPress: handleOkPress,
  };
};

export default useCustomerCare;
