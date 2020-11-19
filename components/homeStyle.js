import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  MainView: {
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
    height: '10%',
    width: '40%',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  Name: {
    // height: "50%",
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // borderRadius: 15,
    // top: 15,
    // zIndex: 1,
  },
  Balance: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // height: "50%",
    borderTopRightRadius: 20,
    backgroundColor: '#F4F5FA',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    // zIndex: 1,
    // position: 'absolute'
  },
  CardTop: {
    backgroundColor: '#F4F5FA',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  CardBottom:{
    backgroundColor: 'white',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  NameBox: {
    backgroundColor: 'black',
    borderRadius: 4,
    aspectRatio: 1,
    flex: 0.2,
  },
});
