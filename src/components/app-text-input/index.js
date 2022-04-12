import React from 'react';
import {View, TextInput, StyleSheet, Platform} from 'react-native';
import {Colors} from '../../constants';
import {AppText} from '../index';

const AppTextInput = ({
  onchangeText,
  placeholderTextcolor = Colors.grey,
  secureTextEntry,
  placeholder,
  color = Colors.black,
  value,
  keyboardType = 'default',
  refName = React.useRef(),
  error = null,
  leftIcon = null,
  rightIcon = null,
  isShadow = true,
  ...props
}) => {
  return (
    <View>
      <View style={styles.inputContainer(isShadow)}>
        {leftIcon ? <View style={styles.leftView}>{leftIcon}</View> : null}
        <TextInput
          ref={refName}
          style={[styles.input, {borderWidth: error ? 1 : 0}]}
          placeholder={placeholder}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onchangeText}
          placeholderTextColor={error ? Colors.error : placeholderTextcolor}
          color={color}
          keyboardType={keyboardType}
          autoCapitalize={'none'}
          {...props}
        />
        {rightIcon ? <View style={styles.rightView}>{rightIcon}</View> : null}
      </View>
      {error ? (
        <AppText size={12} color={Colors.error} style={styles.errorText}>
          {error}
        </AppText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: function (isShadow) {
    return {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: Platform.OS === 'ios' ? 10 : 5,
      paddingHorizontal: Platform.OS === 'ios' ? 20 : 15,
      borderRadius: 8,
      width: '100%',
      alignSelf: 'center',
      backgroundColor: Colors.white,
      margin: 5,
      textAlign: 'left',
      borderColor: Colors.error,
      shadowColor: Colors.black,
      shadowOffset: {width: 0, height: isShadow ? 4 : 0},
      shadowOpacity: isShadow ? 0.1 : 0,
      shadowRadius: isShadow ? 4 : 0,
      elevation: isShadow ? 4 : 0,
    };
  },
  input: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 18,
  },
  errorText: {
    textAlign: 'left',
    marginStart: 10,
    marginBottom: 5,
  },
  leftView: {
    marginEnd: 10,
  },
  rightView: {
    marginStart: 10,
  },
});

export default AppTextInput;
