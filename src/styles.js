import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  selectInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 10,
  },
  optionsBox: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 10,
  },
  rotateIcon: {
    transform: [{ rotate: '180deg' }],
  },

  roundCheckbox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#9C9EB9',
  },
  roundCheckboxActive: {
    borderColor: '#FFB016',
  },
  roundCheckboxCore: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFB016',
  },

  txtPlaceholder: {
    fontSize: 16,
  },
  txtOption: {
    fontSize: 16,
  },

  icon: {
    width: 10,
    height: 10,
  },
});
