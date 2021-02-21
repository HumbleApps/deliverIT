import {
  CameraOptions,
  ImageLibraryOptions,
} from 'react-native-image-picker/src';

export enum ImageInitiator {
  camera = 'camera',
  gallery = 'gallery',
  empty = 'empty',
}

export const defaultOptions: CameraOptions | ImageLibraryOptions = {
  mediaType: 'photo',
  maxWidth: 1024,
  maxHeight: 768,
};
