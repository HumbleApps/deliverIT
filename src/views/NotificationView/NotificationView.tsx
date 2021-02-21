import { getNotifications } from 'actions/notificationActions';
import Navbar from 'components/Navbar';
import NotificationItem from 'components/NotificationItem';
import Text from 'components/Text';
import useI18n from 'hooks/useI18n';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotifications } from 'selectors/notificationsSelector';
import { selectUserId } from 'selectors/userSelector';
import styles from './NotificationView.styles';

const NotificationView = () => {
  const { translate } = useI18n();
  const dispatch = useDispatch();
  const userID = useSelector(selectUserId);
  const notificationsData = useSelector(selectNotifications);
  const showNoNotifications = notificationsData.length === 0;

  const payload = {
    complete: false,
    room: `org_${userID}`,
  };

  useEffect(() => {
    dispatch(getNotifications(payload));
    return () => {};
  }, []);
  return (
    <View style={styles.container}>
      <Navbar header={translate('notifications')} />
      <FlatList
        data={notificationsData}
        renderItem={({ item, id }) => (
          <NotificationItem text={item.text} id={item._id} key={'' + id} />
        )}
        keyExtractor={(item, id) => '' + id}
        contentContainerStyle={styles.flatlist}
      />
      {showNoNotifications && (
        <View style={styles.noNotificationView}>
          <Text>{'No Notifications...'}</Text>
        </View>
      )}
    </View>
  );
};

export default NotificationView;
