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
        // height,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 10,
      },
      cardContainer: {
        flex: 1, 
        width,
        top: 50,
        // height:height,
        // flexDirection:'column',
        // marginTop: height/8,
      },
      viewContent: {
        
      },
      image: {
        flex: 1,
        width: width,
        height: 300,
        position: 'absolute',
        zIndex: 1,
        top: 50,
      },
      shadow: {
        flex: 1, 
        width: '60%',
        // padding: '15%',
        // position: 'absolute',
        // top: (height/3),
        // alignSelf:'center',
        alignItems: 'center',
        
        justifyContent: 'center',
        // backgroundColor: '#97c0dc90',
        backgroundColor: '#ffffff90',
        fontSize: 20,
        fontWeight: 'bold',
        color:'#282a2d',
        // color:'#ffffff90',
        // color:'#dadce0',
        textAlign: 'center',
        borderRadius: 100,
      },
      numberBlob: {
        width: 90,
        height: 90,
        zIndex: 2,
        borderRadius: 100,
        backgroundColor: 'green',
        right: width/11,
        top: 100,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
      },
      number: {
        fontSize: 47,
        fontWeight: 'bold',
        color:'#dadce0',
        // textAlign: 'center',
      },
      types: {
        flexDirection:'row',
        width,
        height:height/20,
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      plainttext: {
        color:'#dadce0',
      },
      abilities: {
        flexDirection:'row',
        width,
        height:height/20,
        alignItems: 'center',
        justifyContent: 'space-around',
        color:'#dadce0',
      },
      skills:{
        flexDirection:'row',
        flexWrap: 'wrap',
      },
      skilltext:{
        padding:20,
        color:'#dadce0',
      },


      
      list: {
        flex: 1,
        width,
        height,
        flexDirection:'column',
        padding: 10,
        marginTop: height/8,
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
        // height: '100%',
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
      
      leftbutton: {
        position: 'absolute',
        zIndex: 4,
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
        zIndex: 4,
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