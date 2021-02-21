import { Langs } from 'constants/languages';
import { useSelector } from 'react-redux';

import {
  selectAllMaterials,
  selectAllVehicleTypes,
  selectAllWorks,
} from 'selectors/assetsSelectors';
import { selectUserLang } from 'selectors/userSelector';

import { DRIVER_IMG, VEHICLE_IMG } from 'images';
import { ImageSourcePropType } from 'react-native';

type ImageAndNameProps = {
  name: string;
  image: ImageSourcePropType;
};

interface VehicleTypeProps extends ImageAndNameProps {
  capacity: string;
}

const useAssets = () => {
  const allMaterials = useSelector(selectAllMaterials);
  const allWorks = useSelector(selectAllWorks);
  const allVehicleTypes = useSelector(selectAllVehicleTypes);
  const userLang = useSelector(selectUserLang) as Langs;

  const getWorkNameAndImageById = (id: string): ImageAndNameProps => {
    const data = { name: '', image: DRIVER_IMG };
    const work = allWorks.find((w) => w._id === id);

    if (!work) {
      return data;
    }

    return {
      name: work.work_name_lang[userLang] || work.work_name,
      image: { uri: work.image },
    };
  };

  const getMaterialNameAndImageById = (id: string): ImageAndNameProps => {
    const material = allMaterials.find((m) => m.id.toString() === id);
    const data = { name: '', image: VEHICLE_IMG };

    if (!material) {
      return data;
    }

    return {
      name: material.display_name_lang[userLang] || material.display_name,
      image: { uri: material.image },
    };
  };

  const getVehicleTypeNameAndImageById = (id: string): VehicleTypeProps => {
    const data = { name: '', image: VEHICLE_IMG, capacity: 'NA' };
    const vehicleType = allVehicleTypes.find((v) => v.id.toString() === id);

    if (!vehicleType) {
      return data;
    }

    return {
      name: vehicleType.display_name,
      capacity: (vehicleType.capacity / 1000).toString(),
      image: vehicleType.images.default
        ? { uri: vehicleType.images.default }
        : VEHICLE_IMG,
    };
  };

  return {
    getWorkNameAndImageById,
    getMaterialNameAndImageById,
    getVehicleTypeNameAndImageById,
  };
};

export default useAssets;
