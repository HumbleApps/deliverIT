import isEmpty from 'utils/isEmpty';
import { months } from '../constants/months';
const SECONDS_IN_MINUTE = 60;

export const formatSecondsInMinutes = (duration: number) => {
  let minutes = 0;
  let seconds = 0;

  minutes = Math.floor(duration / SECONDS_IN_MINUTE);
  seconds = Math.floor(duration % SECONDS_IN_MINUTE);

  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

/**
 *
 * @param month in number 0-11
 * @param year e.g. 2020
 *
 * @return time in Epoch standard
 * Example: getFirstofMonth(0,2021) returns 1st January in Epoch 1609439400000
 */
export const getFirstofMonth = (month: number, year: number) =>
  new Date(year, month, 1).getTime();

/**
 *
 * @param month in number 0-11
 * @param year e.g. 2020
 *
 * @return time in Epoch standard
 * Example: getLastofMonth(0,2021) returns 1st February in Epoch 1612117800000
 */
export const getLastofMonth = (month: number, year: number) =>
  new Date(year, month + 1, 0).getTime();

/**
 * @return the current month in numeric form 0-11
 */
export const getCurrentMonth = () => new Date().getMonth();

/**
 *
 * @param month in numeric 0-11
 *
 * @return the year if the month lies between January - current month
 * else returns previous year
 */
export const getYearAccordingToMonth = (month: number) => {
  const currentMonth = getCurrentMonth();

  if (month >= 0 && month <= currentMonth) {
    return new Date().getFullYear();
  }

  return new Date().getFullYear() - 1;
};

/**
 * @return the current month in text eg. "January"
 */
export const getCurrentMonthName = () => {
  const dateNow = new Date().getMonth();

  return months[dateNow];
};

/**
 *
 * @param month in numeric form 0-11
 * @return the month in text form eg. "January"
 */
export const getMonthName = (month: number) => {
  return months[month];
};

/**
 *
 * @param month in text form eg. "January"
 * @return the month in numeric form 0-11
 */
export const getMonthInNumberic = (month: string) => {
  return months.indexOf(month);
};

/**
 *
 * @param stamp in epoch form like 1609439400000
 * @returns date in date form : 01/01/2021
 */
export const getDateFromEpoch = (stamp: number) => {
  if (stamp === undefined) {
    return 'NA';
  }
  const dateObj = new Date(stamp);
  let date = dateObj.toLocaleDateString('en-US');

  if (!isEmpty(date) && date.split('/')[2].length == 2) {
    let dateArr = date.split('/');
    dateArr[2] = dateObj.getFullYear().toString();
    date = dateArr.join('/');
  }
  return date;
};

/**
 *
 * @param stamp in epoch form like 1609439400000
 * @returns date in date form : 01/01/2021
 */
export const getDateFromEpochInIndianFormat = (stamp: number) => {
  if (stamp === undefined) {
    return 'NA';
  }
  const dateObj = new Date(stamp);
  let date = dateObj.toLocaleDateString();

  if (date && date.split('/')[2].length == 2) {
    let dateArr = date.split('/');
    dateArr[2] = dateObj.getFullYear().toString();
    const tmp = dateArr[0];
    dateArr[0] = dateArr[1];
    dateArr[1] = tmp;
    date = dateArr.join('/');
  }
  return date;
};

/**
 *
 * @param stamp in epoch form like 1609439400000
 * @returns month in numeric form 0-11
 */
export const getMonthFromEpoch = (stamp: number) =>
  getMonthName(new Date(stamp).getMonth());

/**
 *
 * @param stamp in epoch form like 1609439400000
 * @returns time in time form : 08:00 PM etc.
 */
export const getTimeFromEpoch = (stamp: number) => {
  const date = new Date(stamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  let minutesSTR = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutesSTR + ' ' + ampm;
  return strTime;
};

export const getEpochTimeStampForStartOfDay = () => {
  let start = new Date();
  let epochStartOfDay = start.setHours(0, 0, 0, 0);
  return epochStartOfDay;
};

export const getEpochTimeStampForEndOfDay = () => {
  let end = new Date();
  let epochEndOfDay = end.setHours(23, 59, 59, 999);
  return epochEndOfDay;
};
