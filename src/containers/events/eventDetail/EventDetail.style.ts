import { StyleSheet,Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  participateButton:{
    backgroundColor:'#c80202',
    width:width*0.87,
    borderRadius:6,
  },
  participateButtonContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  timeVenueContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginVertical: 8,
    alignItems: 'center',
  },
  eventTimeContainer: {flexDirection: 'row', flex: 1, alignItems: 'center'},
  carouselContainer:{
    flex:2,
  },
  eventDetailVenueLocationText: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    textAlignVertical: 'center',
    marginStart: 4,
    marginBottom: 3,
    color:'#C80202',
  },
  eventDetailTextStyle:{
    fontSize:16,
    color:'#000000',
  },
  eventDetailTextStyleContainer:{
    flex:3,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:24,
  },
    backButton:{
      zIndex:999,
      position:'absolute',
      left:24,
      top:24,
    },
    eventTitleStyle:{
      fontSize: 24,
      fontFamily: 'Helvetica',
      textAlign: 'center',
      marginTop: 8,
      color: '#ffffff',
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
  })