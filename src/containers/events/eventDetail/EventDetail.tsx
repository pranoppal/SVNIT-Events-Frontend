import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Button} from 'react-native-paper';

import {styles} from './EventDetail.styles';

const EventDetail = ({route, navigation}) => {
  const [event, setEvent] = useState(route.params.event);
  const [isLoading, setLoading] = useState(false);

  const backButtonComponent = () => {
    return (
      <TouchableRipple
        onPress={() => navigation.goBack()}
        rippleColor="#c80202"
        style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color="#fff" />
      </TouchableRipple>
    );
  };
  return !isLoading ? (
    <ImageBackground
      source={require('../../../../assets/bg.png')}
      style={styles.bgImage}>
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{height: 150}}>
            {backButtonComponent()}
            <Image
              source={require('../../../../assets/eventDetailBg.png')}
              resizeMode="stretch"
              style={styles.topImage}
            />
            <Text style={styles.eventTitleStyle}>{event.name}</Text>
          </View>
          <View style={{flex: 1}}>
            <View style={styles.eventDetailTextStyleContainer}>
              <Text style={styles.eventDetailTextStyle}>
                {event.eventDetailText} - {event.club}
              </Text>
            </View>
            <View style={styles.carouselContainer} />
            <View style={styles.timeVenueContainer}>
              <View style={styles.eventTimeContainer}>
                <Feather name="clock" size={20} color="#c80202"/>
                <Text style={styles.eventDetailVenueLocationText}>5PM</Text>
              </View>
              <View
                style={[
                  styles.eventTimeContainer,
                  {justifyContent: 'flex-end'},
                ]}>
                <EvilIcons name="location" size={24} color="#c80202"/>
                <Text style={styles.eventDetailVenueLocationText}>
                  {event.venue}
                </Text>
              </View>
            </View>
            <View style={styles.participateButtonContainer}>
              <Button
                onPress={() => console.log('Pressed')}
                color="#ffffff"
                style={styles.participateButton}
                >
                  
                Participate
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
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

export default React.memo(EventDetail);
