import {StyleSheet, Dimensions} from 'react-native';

var width = Dimensions.get('window').width; //full width

export const AuthStyles = StyleSheet.create({
  colorContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparent: {
    flex: 1,
    backgroundColor: 'black',
  },
  authContainer: {
    flex: 4,
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#283618',
    letterSpacing: 0.5,
    paddingTop: 32,
    paddingBottom: 16,
  },
  logo: {
    width: width,
    height: width * 0.6,
    alignSelf: 'center',
  },
  input: {
    height: 48,
    width: '70%',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    borderColor: '#C4C4C4',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: '#A1B856',
    width: '70%',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondButton: {
    width: '70%',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
  },
  textButton: {},
  buttonTitle: {
    color: '#283618',
    fontSize: 16,
    fontWeight: '600',
  },
  secondButtonTitle: {
    color: '#A1B856',
    fontSize: 16,
    fontWeight: '600',
  },
  textButtonTitle: {
    fontWeight: '400',
    marginTop: 10,
    padding: 5,
  },
  separator: {
    flexDirection: 'row',
    width: '70%',
    alignItems: 'flex-start',
    marginTop: 16,
    marginBottom: 16,
  },
  separatorText: {
    marginRight: 8,
    marginLeft: 8,
  },
  divider: {
    borderBottomColor: '#283618',
    borderBottomWidth: 1,
    flex: 1,
    marginTop: 10,
  },
});
