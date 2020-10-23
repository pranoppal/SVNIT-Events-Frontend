import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BackButtonComponent = (props) => {
  return (
    <TouchableRipple
      onPress={() => props.navigation.goBack()}
      rippleColor="#c80202"
    style={[styles.backButton,{top: props.top,}]}>
      <MaterialIcons name="arrow-back" size={24} color="#fff" />
    </TouchableRipple>
  );
};
const styles = StyleSheet.create({
  backButton: {
    zIndex: 999,
    position: 'absolute',
    left: 24,
  },
});
export default React.memo(BackButtonComponent);
