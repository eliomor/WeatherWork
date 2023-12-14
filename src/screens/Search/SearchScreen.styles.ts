import {StyleSheet} from 'react-native';

const SearchScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  locationName: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    fontSize: 50,
  },
  dayContainer: {},
  dateText: {
    fontWeight: 'bold',
  },
  weatherDetails: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 40,
  },
  containerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreenStyles;
