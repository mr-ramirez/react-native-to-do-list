import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ItemContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  Description: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20
  },
  Button: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
