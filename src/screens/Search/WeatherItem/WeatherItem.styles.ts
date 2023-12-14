import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: 5,
  },
  dayContainer: {
    borderTopEndRadius: 50,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 50,
    borderTopStartRadius: 5,
    paddingVertical: 20,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 20,
    color: '#CDE7FE',
    paddingBottom: 10,
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherDetail: {
    flex: 1,
  },
  text: {
    color: '#CDE7FE',
    fontSize: 17,
    textAlign: 'center',
  },
  separatorContainer: {
    paddingTop: 10,
    alignItems: 'center',
  },
  keyValContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  boldText: {
    color: '#CDE7FE',
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
  },
});

export default styles;
