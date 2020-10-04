import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ItemContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  Description: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  ButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Button: {
    width: 'auto',
    justifyContent: 'flex-end',
  },
});
