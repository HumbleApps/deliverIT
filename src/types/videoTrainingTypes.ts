import { VTCategory, VTType } from 'constants/videoTraining';
import { Langs } from 'constants/languages';

export type GetVideoTrainingPayloadType = {
  type: VTType;
  category: VTCategory;
  user_type: 'vendor' | 'driver';
  lang: Langs;
};

export type TrainingVideoType = {
  active: boolean;
  category: string;
  feature: string;
  lang: Langs;
  user_type: string;
  _id: string;
  title: string;
  description: string;
  type: string;
  url: string;
  __v: number;
  created_at: Date;
  updated_at: Date;
  duration: string;
  name: string;
  thumbnail?: string;
};
