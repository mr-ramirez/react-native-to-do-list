import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ItemContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  TextContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 10,
  },
  Description: {
    fontSize: 14,
  },
  Date: {
    marginTop: 5,
    fontSize: 10,
    fontStyle: 'italic',
  },
  OptionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  Button: {
    width: 'auto',
    justifyContent: 'flex-end',
  },
});
