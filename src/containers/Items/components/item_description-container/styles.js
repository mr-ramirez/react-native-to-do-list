import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  PassedDescription: {
    fontSize: 14,
    color: '#9B9998',
  },
  PassedDate: {
    marginTop: 5,
    fontSize: 10,
    fontStyle: 'italic',
    color: '#9B9998',
  },
});
