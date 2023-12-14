import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#2D2D2D',
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 80,
    borderTopEndRadius: 80,
    marginBottom: 80,
  },
  headerText: {
    color: '#CDE7FE',
    fontSize: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CDE7FE',
    marginBottom: 20,
    borderRadius: 10,
  },
  textInput: {
    width: '70%',
    height: 60,
    padding: 10,
    textAlign: 'left',
    fontSize: 22,
  },
});
