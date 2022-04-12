import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  sourceDestinationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: 15,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  inputsContainer: {
    flex: 1,
  },
  inputDivider: {
    width: '85%',
    height: 2,
    backgroundColor: Colors.grey_light,
    alignSelf: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
