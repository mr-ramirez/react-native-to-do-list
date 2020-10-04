import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ItemContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  TextContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  OptionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Button: {
    width: 'auto',
    justifyContent: 'flex-end',
  },
});
