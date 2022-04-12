import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {Colors, FontTypes} from '../../constants';
import {AppText} from '../index';
import styles from './styles';

const Button = ({title, onPress, loading}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.white} />
      ) : (
        <AppText size={16} color={Colors.white} fontType={FontTypes.medium}>
          {title}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

export default Button;
