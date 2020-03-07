import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  exampleContainer: {
    height: Dimensions.get('window').height,
    paddingHorizontal: 13,
    paddingTop: 40,
  },
  timelineHeadingContainer: {paddingVertical: 30, paddingHorizontal: 15},
  timelineHeadingTitleText: {fontSize: 26, fontWeight: 'bold', color: '#222'},
  underline: {
    height: 3,
    width: '30%',
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: '#6F98FA',
    marginLeft: 20,
  },
});
