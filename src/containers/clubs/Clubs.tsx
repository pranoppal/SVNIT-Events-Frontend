import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import CLUBS_DATA from './Dummy';
import {styles} from './Clubs.style'
const Clubs = () => {
  const showClubsCards = () => {
    // if (!isEmpty(events)) {
    const cards = CLUBS_DATA.map((club, index) => {
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
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <Text>{club.clubName}</Text>
              <Text>{club.clubHead}</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/chrd.png')}
                style={styles.clubLogo}
              />
            </View>
          </View>
        </View>
      );
    });
    return cards;
    // } else return null;
  };

  return (
    <ImageBackground
      source={require('../../../assets/bg.png')}
      style={styles.image}>
      <View style={{flex: 1}}>
        <Text style={styles.clubTextStyle}>Clubs</Text>
        <ScrollView>
          <View style={{flex: 1}}>{showClubsCards()}</View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default React.memo(Clubs)