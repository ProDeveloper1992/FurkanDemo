import moment from 'moment';
import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Colors} from '../../constants';
import PropTypes from 'prop-types';
import {AppText} from '../index';

function AppDatePicker({placeholder, value, error, onChangeDate, ...props}) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {}}
        style={[
          styles.container,
          {borderColor: error ? Colors.red : Colors.gray},
        ]}>
        <View style={{padding: 15, flex: 1}}>
          <AppText size={14} style={styles.label}>
            {value != null ? moment(value).format('DD MMM YYYY') : placeholder}
          </AppText>
        </View>
      </TouchableOpacity>
      {error ? <AppText>{error}</AppText> : null}
    </View>
  );
}

AppDatePicker.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.any,
  onChangeDate: PropTypes.func,
};

AppDatePicker.defaultProps = {
  placeholder: 'Select Date',
  value: new Date(),
  error: null,
  onChangeDate: (date) => {},
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  label: {
    alignSelf: 'flex-start',
  },
});

export default AppDatePicker;
