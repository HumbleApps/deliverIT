import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useDispatch } from 'react-redux';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Text from 'components/Text';
import Button from 'components/Button';
import useGPSOn from './useTurnGPSOnModal';
import Icon from 'components/Icon';
import { setTripManagementModal } from 'actions/tripActions';
import colors from 'styles/colors';
import { ModalNames } from 'modals';
import { getInternetAvailability } from 'utils/internet';

const TurnGPSOnModal = () => {
  const dispatch = useDispatch();
  const { ref, onClosed } = useGPSOn();

  const handleButtonPress = async () => {
    const internetOn = await getInternetAvailability();
    onClosed();
    if (!internetOn) {
      dispatch(
        setTripManagementModal(false, ModalNames.TURN_INTERNET_ON_MODAL, null),
      );
    }
  };

  return (
    <Modalize ref={ref} onClosed={onClosed} adjustToContentHeight>
      <View style={styles.container}>
        <Icon
          size={60}
          icon={faExclamationCircle}
          color={colors.primary}
          style={{ alignSelf: 'center', marginBottom: 20 }}
        />
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Please, Turn on your GPS </Text>
        </View>
        <Button title="ENABLE GPS" onPress={handleButtonPress} />
      </View>
    </Modalize>
  );
};

export default TurnGPSOnModal;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
