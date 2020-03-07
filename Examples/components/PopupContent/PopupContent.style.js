import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  popupContent: {justifyContent: 'center', alignItems: 'center'},
  popupImage: {width: 100, height: 100},
  popupTextContainer: {marginVertical: 12},
  popupDescriptionText: {textAlign: 'center', fontSize: 12, color: '#666'},
  popupHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 7,
  },
  actionButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginHorizontal: 5,
  },
  buttonIcon: {fontSize: 20, color: '#FFF'},
});
