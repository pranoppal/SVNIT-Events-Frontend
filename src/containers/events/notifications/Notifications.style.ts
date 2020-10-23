import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  buttonLabelStyle: {
    fontSize: 14,
  },
  headerText: {
    fontSize: 21,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    marginTop: 8,
    color: '#ffffff',
  },
  headerStyle: {
    height: 60,
    backgroundColor: '#C80202',
    marginBottom: 16,
  },
  acceptButtonStyle: {
    backgroundColor: '#C80202',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  rejectButtonStyle: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C80202',
  },
  clubLogo: {height: 45, width: 45, borderRadius: 23},
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '87%',
    alignSelf: 'center',
    minHeight: 100,
    marginBottom: 24,
  },
  notificationsContainer: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 2,
    alignItems: 'center',
    marginHorizontal: 24,
    marginVertical: 16,
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
});
