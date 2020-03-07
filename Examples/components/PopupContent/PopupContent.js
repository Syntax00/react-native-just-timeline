import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import Happy from '../../assets/images/happy.png';

import styles from './PopupContent.style';
import Icon from 'react-native-vector-icons/FontAwesome';

const PopupContent = ({pressAction}) => {
  return (
    <View style={styles.popupContent}>
      <Image source={Happy} style={styles.popupImage} />
      <View style={styles.popupTextContainer}>
        <Text style={styles.popupHeading}>Thaaanks! You just click me!</Text>
        <Text style={styles.popupDescriptionText}>
          So, was that click actually on purpose?
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 20}}>
        <TouchableOpacity
          onPress={() => pressAction()}
          style={[styles.actionButton, {backgroundColor: '#00b48b'}]}>
          <Icon name="check" style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => pressAction()}
          style={[styles.actionButton, {backgroundColor: '#d0594c'}]}>
          <Icon name="times" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopupContent;
