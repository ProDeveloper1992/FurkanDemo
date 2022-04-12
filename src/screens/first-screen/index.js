import React from 'react';
import {SafeAreaView, View, Image, TouchableOpacity} from 'react-native';

import {AppButton, AppTextInput} from '../../components';
import {Icons} from '../../constants';
import styles from './styles';

const FisrtScreen = (props) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sourceDestinationCard}>
        <View style={styles.inputsContainer}>
          <AppTextInput
            placeholder={'başlangıç noktası'}
            isShadow={false}
            leftIcon={<Image source={Icons.location} style={styles.icon} />}
            rightIcon={
              <TouchableOpacity>
                <Image source={Icons.pin} style={styles.icon} />
              </TouchableOpacity>
            }
          />
          <View style={styles.inputDivider} />
          <AppTextInput
            placeholder={'varış noktası'}
            isShadow={false}
            leftIcon={<Image source={Icons.location} style={styles.icon} />}
            rightIcon={<Image source={Icons.map} style={styles.icon} />}
          />
        </View>
        <TouchableOpacity>
          <Image source={Icons.exchange} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FisrtScreen;
