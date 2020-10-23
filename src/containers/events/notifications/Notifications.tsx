import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {styles} from './Notifications.style';
import NOTIFICATIONS_DATA from './Dummy';
import {Button} from 'react-native-paper';
import {BackButton} from '../../../components';

const Notifications = ({route, navigation}) => {
  const [isLoading, setLoading] = useState(false);

  const notificationCard = () => {
    const cards = NOTIFICATIONS_DATA.map((noti, index) => {
      return (
        <View key={index} style={styles.cardContainer}>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              marginHorizontal: 24,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../../assets/chrd.png')}
                style={styles.clubLogo}
              />
            </View>
            <View
              style={{
                flex: 3,
                justifyContent: 'center',
              }}>
              <Text>{noti.clubName}</Text>
              <Text>{noti.eventName}</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Button
              onPress={() => console.log('accepted')}
              style={styles.rejectButtonStyle}
              labelStyle={styles.buttonLabelStyle}>
              REJECT
            </Button>
            <Button
              onPress={() => console.log('accepted')}
              style={styles.acceptButtonStyle}
              labelStyle={styles.buttonLabelStyle}
              color="#ffffff">
              ACCEPT
            </Button>
          </View>
        </View>
      );
    });
    return cards;
  };
  return !isLoading ? (
    <ImageBackground
      source={require('../../../../assets/bg.png')}
      style={styles.bgImage}>
      <View style={{flex: 1}}>
        <View style={styles.headerStyle}>
          <BackButton navigation={navigation} top={16} />
          <Text style={styles.headerText}>Notifications</Text>
        </View>
        <ScrollView>
          <View style={{flex: 1}}>{notificationCard()}</View>
        </ScrollView>
      </View>
    </ImageBackground>
  ) : (
    <ImageBackground
      source={require('../../../../assets/bg.png')}
      style={styles.bgImage}>
      <View style={styles.mainContainer}>
        <ActivityIndicator
          color={'#f1c644'}
          size={36}
          style={styles.activityIndicator}
        />
      </View>
    </ImageBackground>
  );
};

export default React.memo(Notifications);
