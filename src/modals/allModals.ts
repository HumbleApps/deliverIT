import { ReactNode } from 'react';

import { ModalNames } from './modalNames';

import LanguageModal from 'components/LanguageModal';
import ImageInitiatorModal from 'components/ImageInitiatorModal';
// import AddVehiclesModal from 'components/AddVehicleModal';
// import AddDriverModal from 'components/AddDriverModal';
import CustomerCareModal from 'components/CustomerCareModal';
import SuccessModal from 'components/SuccessModal';
// import TripHelpModal from 'components/TripHelpModal';
// import TripCancelModal from 'components/TripCancelModal';
import TurnInternetOnModal from 'components/TurnInternetOnModal';
import TurnGpsOnModal from 'components/TurnGPSOnModal';
// import TripEndConfirmationModal from 'components/TripEndConfirmationModal';
// import TripHubNotificationModal from 'components/TripHubNotificationModal';
import CancelNotificationModal from 'components/CancelNotificationModal';
import TextModal from 'components/TextModal';

const allModals: Record<ModalNames, ReactNode> = {
  [ModalNames.LANGUAGE_MODAL]: LanguageModal,
  [ModalNames.IMAGE_INITIATOR_MODAL]: ImageInitiatorModal,
  // [ModalNames.ADD_VEHICLE_MODAL]: AddVehiclesModal,
  // [ModalNames.ADD_DRIVER_MODAL]: AddDriverModal,
  [ModalNames.CUSTOMER_CARE_MODAL]: CustomerCareModal,
  [ModalNames.SUCCESS_MODAL]: SuccessModal,
  // [ModalNames.TRIP_HELP_MODAL]: TripHelpModal,
  [ModalNames.TURN_INTERNET_ON_MODAL]: TurnInternetOnModal,
  [ModalNames.TURN_GPS_ON_MODAL]: TurnGpsOnModal,
  // [ModalNames.TRIP_CANCEL_MODAL]: TripCancelModal,
  // [ModalNames.TRIP_END_CONFIRMATION_MODAL]: TripEndConfirmationModal,
  // [ModalNames.TRIP_HUB_NOTIFICATION_MODAL]: TripHubNotificationModal,
  [ModalNames.CANCEL_NOTIFICATION_MODAL]: CancelNotificationModal,
  [ModalNames.TEXT_MODAL]: TextModal,
  // [ModalNames.TRIP_CANCEL_MODAL]: TripCancelModal,
};

export default allModals;
