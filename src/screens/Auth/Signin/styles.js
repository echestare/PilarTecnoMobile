import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#345678'
      },
      mainContent: {
        flex: 1,
        width,
        height,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      },
      rowContent: {
        flex: 1,
        width,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      buttonContent: {
        width: width,
        // height: '100%',
        // margin: 10,
        // borderRadius: 20,
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'pink',
        // backgroundColor: 'transparent',
        // backfaceVisibility: 'visible'
      },
      title: {
        width: width,
        // backgroundColor: '#97c0dc90',
        backgroundColor: '#3465a490',
        fontSize: 10,
        fontWeight: 'bold',
        // color:'#282a2d',
        color:'#dadce0',
        textAlign: 'center',
        borderRadius: 20,
      }
})