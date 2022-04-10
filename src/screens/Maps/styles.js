import { StyleSheet, Dimensions } from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

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
      buttonContent: {
        width: width/4,
        height: '100%',
        borderRadius: 50,
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
      },

      mapContent: {
        flex: 1,
        width,
        height,
        margin: 10,
        // flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',

      },    
      map: {
        ...StyleSheet.absoluteFillObject,
        width: '90%',
        height: '90%',
        // top: 80,
        top: 20,
        margin: 20,
        // position: 'absolute',
        // zindex: 1, 
        alignSelf:'center',
      },
      crossIcon:{
        top: '8%',
        right: '8%',
        position:'absolute', 
        // marginTop: 80, 
        flexDirection:'row',
        backgroundColor:'#3465a490', 
        borderRadius:100, 
        // alignSelf:'flex-end',
        // margin:20, 
        // marginRight:30, 
        alignItems:'center', 
        justifyContent:'center',
        height: 50,
        width: 50
        // width:width/10,
      },
      markerFixed: {
        position: 'absolute',
        zindex: 4, 
        left: '50%',
        marginLeft: -24,
        marginTop: -40,
        top: '50%',
      },
      marker: {
        height: 48,
        width: 48
      },
      footer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        bottom: '4%',
        // bottom: height/9,
        position: 'absolute',
        width: '70%',
        right: '5%'

      },
      region: {
        color: '#fff',
        lineHeight: 20,
        margin: 20,
        alignSelf:'center'
      },
      mapTypes:{
        top: 50,
        // right: '8%',
        position:'absolute', 
        zindex: 4, 
        // marginTop: 80, 
        flexDirection:'row',
        backgroundColor:'#3465a490', 
        borderRadius:100, 
        // alignSelf:'flex-end',
        // margin:20, 
        // marginRight:30, 
        alignItems:'center', 
        justifyContent:'space-around',
        height: 50,
        width: '100%'
        // width:width/10,

      },      
      
                
})