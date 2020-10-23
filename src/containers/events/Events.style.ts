import { StyleSheet,Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window')

const HEADER_EXPANDED_HEIGHT = 150;
export const styles = StyleSheet.create({
    eventClubLogo: {height: 90, width: 120, borderRadius: 5},
    eventTimeContainer: {flexDirection: 'row', flex: 1, alignItems: 'center'},
    eventSecondaryContainer: {
      flex: 2,
      flexDirection: 'row',
      marginHorizontal: 24,
      marginTop: 24,
    },
    eventTextDetailsContainer: {
      flex: 2,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    timeVenueContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 24,
      marginVertical: 8,
      alignItems: 'center',
    },
    expandedToolbarContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    toolbarContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#C80202',
      justifyContent: 'space-between',
    },
    eventTextToolbar: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 21,
      justifyContent: 'center',
      marginStart: 24,
      // position:'absolute',
      // left:0,
      // right:0,
    },
    notificationIconToolbar: {
      alignSelf: 'center',
      justifyContent: 'flex-end',
      marginEnd: 24,
      // position:'absolute',
      // top:16,
      // right:24,
    },
    notificationIconExpanded: {
      position: 'absolute',
      top: 20,
      right: 24,
    },
    scrollContainer: {
      padding: 16,
      paddingTop: HEADER_EXPANDED_HEIGHT,
    },
    header: {
      position: 'absolute',
      width: width,
      top: 0,
      left: 0,
      zIndex: 9999,
    },
    topImage: {
      width: width,
      aspectRatio: 1,
      position: 'absolute',
      top: 0,
      zIndex: 0,
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
    cardContainer: {
      backgroundColor: '#fff',
      borderRadius: 12,
      width: '100%',
      height: 180,
      marginBottom: 24,
    },
    eventsTitleText: {
      fontSize: 24,
      fontFamily: 'Helvetica',
      textAlign: 'center',
      marginTop: 8,
      color: '#ffffff',
    },
    eventClubText: {
      fontSize: 18,
      fontFamily: 'Nunito-Regular',
      marginTop: -8,
    },
    eventDetailText: {
      fontSize: 16,
      fontFamily: 'Nunito-Regular',
      textAlignVertical: 'center',
      marginStart: 4,
      marginBottom: 3,
    },
    eventNameText: {
      fontSize: 20,
      fontFamily: 'Helvetica',
    },
  });
  