import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  ImageBackground,
  Animated,
} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import {isEmpty} from 'lodash-es';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AirbnbRating} from 'react-native-ratings';
import {TouchableRipple} from 'react-native-paper';
import {styles} from './Events.style'
import EVENTS_DATA from './Dummy';


const Events = ({navigation}) => {
  // const {events} = useStoreState(state => state.events);
  // const {getEvents} = useStoreActions(actions => actions.events);
  const [isLoading, setLoading] = useState(false);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const [HEADER_EXPANDED_HEIGHT, setHEADER_EXPANDED_HEIGHT] = useState(150);
  const [HEADER_COLLAPSED_HEIGHT, setHEADER_COLLAPSED_HEIGHT] = useState(60);

  // useEffect(() => {
  //   getEvents();
  // }, []);

  // useEffect(() => {
  //   if (!isEmpty(events)) setLoading(false);
  // }, [events]);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: 'clamp',
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const heroTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const showEventCards = () => {
    // if (!isEmpty(events)) {
    const cards = EVENTS_DATA.map((event, index) => {
      return (
        <TouchableRipple
          onPress={() => handleEventClick(event)}
          key={index}
          >
          <View style={styles.cardContainer} key={index} >
            <View style={styles.eventSecondaryContainer}>
              <View style={{flex: 1.5}}>
                <Image
                  source={require('../../../assets/chrd.png')}
                  style={styles.eventClubLogo}
                />
              </View>
              <View style={styles.eventTextDetailsContainer}>
                <Text style={styles.eventNameText}>{event.name}</Text>
                <Text style={styles.eventClubText}>{event.club}</Text>
                <AirbnbRating
                  count={5}
                  defaultRating={5}
                  size={16}
                  reviewSize={0}
                  starContainerStyle={{
                    marginTop: -8,
                    marginStart: -4,
                  }}
                  isDisabled={true}
                  // onFinishRating={this.ratingCompleted}
                />
              </View>
            </View>
            <View style={styles.timeVenueContainer}>
              <View style={styles.eventTimeContainer}>
                <Feather name="clock" size={20} />
                <Text style={styles.eventDetailText}>5PM</Text>
              </View>
              <View
                style={[
                  styles.eventTimeContainer,
                  {justifyContent: 'flex-end'},
                ]}>
                <EvilIcons name="location" size={24} />
                <Text style={styles.eventDetailText}>{event.venue}</Text>
              </View>
            </View>
          </View>
        </TouchableRipple>
      )
    })
    return cards
    // } else return null;
  }

  const handleEventClick = (event) => {
    navigation.navigate('EventDetail',{
      event:event,
    })
  };
  //TODO check which using native driver is better
  const onScrollEventDetails = () => {
    return Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              y: scrollY,
            },
          },
        },
      ],
      {useNativeDriver: false},
    );
  };

  const handleNotificationClick = () => {
    navigation.navigate('Notifications');
  };

  const notificationIcon = () => {
    return (
      <TouchableRipple
        onPress={() => handleNotificationClick()}
        rippleColor="#ffffff">
        <MaterialIcons name="notifications-active" size={24} color="#ffffff" />
      </TouchableRipple>
    );
  };
  return !isLoading ? (
    <ImageBackground
      source={require('../../../assets/bg.png')}
      style={styles.bgImage}>
      <View style={{flex: 1}}>
        <Animated.View style={[styles.header, {height: headerHeight}]}>
          <Animated.View
            style={[styles.toolbarContainer, {opacity: headerTitleOpacity}]}>
            <Text style={styles.eventTextToolbar}>Events</Text>
            <View style={styles.notificationIconToolbar}>
              {notificationIcon()}
            </View>
          </Animated.View>
          <Animated.View
            style={[
              styles.expandedToolbarContainer,
              {opacity: heroTitleOpacity},
            ]}>
            <Image
              source={require('../../../assets/TopImage.png')}
              resizeMode="stretch"
              style={styles.topImage}
            />
            <Text style={styles.eventsTitleText}>Events</Text>

            <View style={styles.notificationIconExpanded}>
              {notificationIcon()}
            </View>
          </Animated.View>
        </Animated.View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={onScrollEventDetails()}
          scrollEventThrottle={16}>
          <View style={{flex: 1}}>{showEventCards()}</View>
        </ScrollView>
      </View>
    </ImageBackground>
  ) : (
    <ImageBackground
      source={require('../../../assets/bg.png')}
      style={styles.bgImage}>
      <View style={styles.mainContainer}>
        <ActivityIndicator
          color={'#f1c644'}
          size={36}
          style={styles.activityIndicator}
        />
      </View>
    </ImageBackground>
  )
}

export default React.memo(Events)

