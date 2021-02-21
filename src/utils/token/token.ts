import CryptoJS from 'crypto-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TOKEN_SECRET, TOKEN_KEY } from 'constants/miscData';

export const encryptToken = (token: string): string =>
  CryptoJS.AES.encrypt(token.trim(), TOKEN_SECRET).toString();

export const decryptToken = (encryptedToken: string | null): string | null => {
  let decryptedToken = null;

  if (encryptedToken) {
    decryptedToken = CryptoJS.AES.decrypt(
      encryptedToken,
      TOKEN_SECRET,
    ).toString(CryptoJS.enc.Utf8);
  }

  return decryptedToken;
};

/**
 * sets encrypted token to Storage
 *
 * @param token - verified user token
 */
export const setToken = async (token: string) => {
  const encryptedToken = encryptToken(token);

  try {
    await AsyncStorage.setItem(TOKEN_KEY, encryptedToken);
  } catch (err) {
    console.error(err);
  }
};

/**
 * gets decrypted user token from Storage
 *
 * @return decrypted verified token
 */
export const getToken = async () => {
  let encryptedToken: string | null = null;

  try {
    encryptedToken = await AsyncStorage.getItem(TOKEN_KEY);
  } catch (err) {
    console.error(err);
  }

  if (encryptToken === null) {
    return encryptToken;
  }

  return decryptToken(encryptedToken);
};

/**
 * removes token from Storage
 */
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY, (error) => {
      console.error('Async Storage remove item: ', error);
    });
  } catch (error) {
    console.error(error);
  }
};
