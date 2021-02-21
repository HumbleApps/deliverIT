import React from 'react';
import { Modalize } from 'react-native-modalize';
import { StyleSheet, View } from 'react-native';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Text from 'components/Text';
import Button from 'components/Button';
import useInternetOn from './useTurnInternetOnModal';
import Icon from 'components/Icon';
import colors from 'styles/colors';
const TurnInternetOnModal = () => {
  const { ref, onClosed } = useInternetOn();

  const handleButtonPress = () => {
    onClosed();
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
          <Text style={styles.text}>Your internet is off </Text>
          <Text style={styles.text}> Please, Turn on your internet</Text>
        </View>
        <Button title="ENABLE INTERNET" onPress={handleButtonPress} />
      </View>
    </Modalize>
  );
};

export default TurnInternetOnModal;

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
