import { HubItem, TripItem } from 'types/tripTypes';
import { VerificationType } from 'types/verificationTypes';

export const extractHubIds = (data: TripItem[]): string[] => {
  const hubIds = data.map((d) => d.hub_id);
  const uniqueHubIds = hubIds.filter(function (item, pos) {
    return hubIds.indexOf(item) === pos;
  });
  return uniqueHubIds;
};

export const mapResponseDataToObject = (hubList: HubItem[]) => {
  const hubMap: any = {};
  hubList.forEach((hub: HubItem) => {
    hubMap[hub._id] = hub;
  });
  return hubMap;
};

export const mapDriverListWithInUseStatus = (
  driverList: VerificationType[],
  driverObjectWithInUseStatus: {
    [key: string]: {
      is_occupied: boolean;
    };
  },
) => {
  return driverList.map((driver) => {
    const driverInUseStatus =
      driverObjectWithInUseStatus[driver.entity_key!].is_occupied;
    return { driverDetails: driver, inUseStatus: driverInUseStatus };
  });
};

export const mapVehicleListWithInUseStatus = (
  vehicleList: VerificationType[],
  vehicleObjectWithInUseStatus: {
    [key: string]: {
      is_occupied: boolean;
    };
  },
) => {
  return vehicleList.map((vehicle) => {
    const vehicleInUseStatus =
      vehicleObjectWithInUseStatus[vehicle.entity_key!].is_occupied;
    return { vehicleDetails: vehicle, inUseStatus: vehicleInUseStatus };
  });
};
