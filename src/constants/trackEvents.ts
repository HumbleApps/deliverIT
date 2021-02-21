enum TrackEvents {
  app_init = 'app_init',
  /**
   * Discovery Events
   */
  click_upcoming_booking = 'click_upcoming booking', //TODO
  screen_discovery_homepage = 'screen_discovery_homepage',
  click_withincity_listing = 'click_withincity_listing',
  click_withincity_listing_goback = 'click_withincity_listing_goback', //TODO
  click_withincity_apply = 'click_withincity_apply',
  click_withincity_vehicle_apply = 'click_withincity_ vehicle_apply',
  click_withincity_driver_apply = 'click_withincity_driver_apply',
  click_withincity_pickuppoint_home = 'click_withincity_pickuppoint_home',
  click_withincity_pickuppoint_detailed = 'click_withincity_pickuppoint_detailed',
  click_on_notification_ekalavya = 'click_on_notification_ekalavya', //TODO
  click_on_notification_new_bookingassignment = 'click_on_notification_new_bookingassignment', //TODO
  click_on_number_of_vehicles_apply = 'click_on_number_of_vehicles_apply',
  click_on_addnewvehicle = 'click_on_addnewvehicle',
  click_on_addnewdriver = 'click_on_addnewdriver',
  screen_withincity_detailed = 'screen_withincity_detailed',

  /**
   * Trip Management Events
   */
  start_trip = 'start_trip',
  trip_today = 'trip_today',
  trip_next = 'trip_next',
  trip_past = 'trip_past',
  trip_end = 'trip_end',
  trip_change = 'trip_change',
  trip_change_vehicle_today = 'trip_change_vehicle_today',
  trip_change_driver_today = 'trip_change_driver_today',
  trip_change_vehicle_next = 'trip_change_vehicle_next',
  trip_change_driver_next = 'trip_change_driver_next',
  trip_cancel_today = 'trip_cancel_today',
  trip_cancel_next = 'trip_cancel_next',
  trip_help_today = 'trip_help_today',
  trp_help_next = 'trp_help_next',

  /**
   * Payment Events
   */
  earning_page = 'earning_page',
  click_vehicle_earning_page = 'click_vehicle_earning_page',
  click_view_details_booking = 'click_view_details_booking',
  click_customer_care = 'click_customer_care',
  click_ok_raise_issue = 'click_ok_raise_issue',
  click_view_trips_scheduled = 'click_view_trips_scheduled',
  click_view_trips_present = 'click_view_trips_present',
  click_view_trips_absent = 'click_view_trips_absent',
  click_view_trips_all = 'click_view_trips_all',
  click_view_trips_raise_issue = 'click_view_trips_raise_issue',

  /**
   * Onboarding Events
   */
  view_app_language_modal_start = 'view_app_language_modal_start',
  click_app_language_start = 'click_app_language_start',
  view_login_page = 'view_login_page',
  view_otp_page = 'view_otp_page',
  click_get_otp = 'click_get_otp',
  click_otp_ok = 'click_otp_ok',
  click_resend_otp = 'click_resend_otp',
  view_unregistered_driver = 'view_unregistered _driver',
  view_registration_page_1 = 'view_registration_page_1',
  view_registration_detail_page = 'view_registration_detail_page',
  click_ok_personal_details_registration = 'click_ok_personal_details_registration',
  click_video_language = 'click_video_language',
  click_training_video_registration = 'click_training_video_registration',
  click_video_watch_training = 'click_video_watch_training',
  click_next_video = 'click_next_video',
  click_upload = 'click_upload',
  click_ok_bank_details = 'click_ok_bank_details',
  click_add_vehicle = 'click_add_vehicle',
  click_ok_vehicle_number = 'click_ok_vehicle_number',
  click_edit_vehicle_vehicle_document = 'click_edit_vehicle_vehicle_document',
  click_ok_add_vehicle = 'click_ok_add_vehicle',
  click_ok_driver_input = 'click_ok_driver_input',
  click_add_driver = 'click_add_driver',
  click_ok_add_driver = 'click_ok_add_driver',
  click_driver_doc_edit = 'click_driver_doc_edit',
  click_ok_registration_submit = 'click_ok_registration_submit',
  click_training_video_profile_page = 'click_training_video_profile_page',
  click_personal_details_profile_page = 'click_personal_details_profile_page',
  click_bank_document_profile_page = 'click_bank_document_profile_page',
  click_Log_out = 'click_Log_out',
  click_my_vehicles_icon = 'click_my_vehicles_icon',
  click_my_drivers_icon = 'click_my_drivers_icon',
  click_vehicle_card_edit = 'click_vehicle_card_edit',
  click_upload_driving_license = 'click_upload_driving_license',
  profile_page_view = 'profile_page_view',
  view_personal_registration = 'view_personal_registration',
  view_training_registration = 'view_training_registration',
  view_bank_registration = 'view_bank_registration',
  view_add_vehicle_registration = 'view_add_vehicle_registration',
  view_add_driver_registration = 'view_add_driver_registration',
  view_license_registration = 'view_license_registration',
}

export default TrackEvents;
