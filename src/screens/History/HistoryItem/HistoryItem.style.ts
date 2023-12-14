import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#2D2D2D',
    width: 300,
    height: 100,
    borderTopEndRadius: 50,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 50,
    borderTopStartRadius: 5,
  },
  leftContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationName: {
    fontSize: 20,
    paddingVertical: 7,
    fontWeight: 'bold',
    color: '#CDE7FE',
  },
  temperature: {
    color: '#CDE7FE',
    fontSize: 25,
  },
  customButton: {
    paddingVertical: 7,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FECDD3',
    fontWeight: 'bold',
    fontSize: 15,
  },
  separatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
