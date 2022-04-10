import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width:width,
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
      list: {
        flex: 1,
        width,
        height,
        flexDirection:'column',
        padding: 10,
        marginTop: 80,
      },
      rowContent: {
        flex: 1,
        width,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      buttonContent: {
        width: width/4,
        height: '100%',
        margin: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        backgroundColor: 'transparent',
        backfaceVisibility: 'visible'
      },
      title: {
        // width: '100%',
        // backgroundColor: '#97c0dc90',
        backgroundColor: '#3465a490',
        fontSize: 10,
        fontWeight: 'bold',
        // color:'#282a2d',
        color:'#dadce0',
        textAlign: 'center',
        borderRadius: 20,
      },
      cardContainer: {
        flex: 5, alignItems: 'center', justifyContent: 'center',width: width,
      },
      leftbutton: {
        position: 'absolute',
        zIndex: 3,
        top: '50%',
        left:5,
        height: 45,
        width: 45,
        backgroundColor: '#3465a490',
        borderRadius: 100,
        alignContent:'center',
        justifyContent: 'center'
      },
      rigthbutton: {
        position: 'absolute',
        zIndex: 3,
        top: '50%',
        right:5,
        height: 45,
        width: 45,
        backgroundColor: '#3465a490',
        borderRadius: 100,
        alignContent:'center',
        justifyContent: 'center'
      },
})