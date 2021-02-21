import analytics from '@segment/analytics-react-native';

import { SEGMENT_KEY } from 'constants/creds';
import TrackEvents from 'constants/trackEvents';
import PathNames from 'routes/pathNames';

export type SegmentTrackProps = {
  eventName: TrackEvents;
  eventData?: Record<string, string | number>;
};

export const initSegment = async () => {
  try {
    await analytics.setup(SEGMENT_KEY, {
      // Record screen views automatically!
      recordScreenViews: true,
      // Record certain application events automatically!
      trackAppLifecycleEvents: true,
    });
  } catch (error) {
    console.error('Failed to connect to segment: ', error);
  }
};

export const trackEvent = async (options: SegmentTrackProps) => {
  try {
    await analytics.track(options.eventName, options.eventData);
  } catch (error) {
    console.error('Failed to send track event to segment: ', error);
  }
};

export const trackScreen = async (pathName: PathNames) => {
  try {
    await analytics.screen(pathName.split('/')[1]);
  } catch (error) {
    console.error('Failed to send screen event to segment: ', error);
  }
};

export const identifyUser = async (userId: number, phone_number: number) => {
  if (analytics.ready) {
    try {
      analytics.identify(userId.toString(), {
        phone_number,
      });
    } catch (error) {
      console.error('Failed to identify user to segment: ', error);
    }
  }
};
