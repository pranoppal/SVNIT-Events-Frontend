import { StyleSheet, } from 'react-native'
// const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    clubLogo: {height: 60, width: 90, borderRadius: 5},
    cardContainer: {
      backgroundColor: '#fff',
      borderRadius: 12,
      width: '80%',
      alignSelf: 'center',
      height: 100,
      marginBottom: 24,
    },
    clubTextStyle: {
      fontSize: 24,
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 8,
      color: '#ffffff',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  });
  