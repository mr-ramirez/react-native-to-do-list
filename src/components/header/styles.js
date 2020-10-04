import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  HeaderContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
    marginRight: 10,
    marginLeft: 10,
  },
  LeftSide: {
    flex: 1,
  },
  CenterSide: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightSide: {
    flex: 1,
    alignItems: 'flex-end',
  },
  Title: {
    fontSize: 20,
  },
});
