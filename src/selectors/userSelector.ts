import { RootState } from 'store';
import { CityType } from 'types/cityTypes';
import { UserType } from 'types/userTypes';

export const selectIsAuthenticated = (state: RootState): boolean =>
  state.user.isAuthenticated;

export const selectUserDetails = (state: RootState): UserType =>
  state.user.details;

export const selectUserPhoneNumber = (state: RootState): number =>
  state.user.details.phone_number;

export const selectUserLang = (state: RootState) => state.user.details.language;

export const selectDriverHelplineNumber = (state: RootState): string => {
  const userCity = state.user.details.city;
  const helpLine =
    state.user.cities
      .find((c: CityType) => c.code === userCity)
      ?.driver_helpline.toString() || '';

  return helpLine;
};

export const selectCities = (state: RootState): CityType[] => state.user.cities;

export const selectUserId = (state: RootState): number => state.user.details.id;

export const selectUserName = (state: RootState): string =>
  state.user.details.name;

export const selectCity = (state: RootState): string => state.user.details.city;

export const selectUserType = (state: RootState): string =>
  state.user.details.user_type;

export const selectCityId = (state: RootState) => {
  const { city, cities } = state.user;

  return cities.find((c) => c.code === city)?.id;
};

export const selectUserStaticDetails = (state: RootState) =>
  state.user.details.user_details;

export const selectLTOrgId = (state: RootState) => state.user.organization.id;

export const selectChildId = (state: RootState) => state.user.details.child_id;

export const selectChild = (state: RootState) => state.user.details.child;

export const selectIsOnboardingComplete = (state: RootState) =>
  state.user.details.user_details?.supply_app?.onboarding_complete || false;

export const selectIsFetching = (state: RootState) => state.user.isFetching;
