import React, {useState} from 'react';
import {SafeAreaView, View, Image, TouchableOpacity} from 'react-native';

import {
  AppButton,
  AppDatePicker,
  AppText,
  AppTextInput,
} from '../../components';
import {Colors, Icons} from '../../constants';
import styles from './styles';

const TABS = [
  {
    id: 1,
    name: 'En Yakin',
  },
  {
    id: 2,
    name: 'Min. Yurume',
  },
  {
    id: 3,
    name: 'Min. Aktarma',
  },
];

const FisrtScreen = (props) => {
  const {navigation} = props;

  const [selectedTab, setSelectedTab] = useState(TABS[0]);

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
      <View style={styles.datePickerContainer}>
        <View style={styles.datePicker}>
          <AppDatePicker />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title={'Rota Bul'} />
        </View>
      </View>

      <View style={styles.tabsContainer}>
        {TABS.map((tabItem, tabIndex) => {
          let isSelected = tabItem.id === selectedTab.id ? true : false;
          return (
            <TouchableOpacity
              key={String(tabIndex)}
              style={[
                styles.tabItem,
                {
                  backgroundColor: isSelected
                    ? Colors.primary
                    : Colors.grey_light,
                },
              ]}
              onPress={() => setSelectedTab(tabItem)}>
              <AppText color={isSelected ? Colors.white : Colors.black}>
                {tabItem.name}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default FisrtScreen;
