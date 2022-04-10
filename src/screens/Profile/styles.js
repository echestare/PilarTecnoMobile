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



      profile: {
        flex:1,
      },
      rowContent: {
        flex: 1,
        width,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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





      numberboxs: {
        // flex: 3,
        flexDirection: 'row',
        top: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        width: width-(width/8+100),
        left: width/8,
        color: 'white'
      },
      textboxs: {
        color: 'white',
        fontSize: 20, 
        fontWeight: 'bold',
      },
      describe: {
        color: 'white', 
        fontSize: 16, 
        width: width*.8,
        height: height/8,
        top: 110, 
        left: 30, 
        marginRight: 50, 
        backgroundColor: '#3465a490', 
        borderRadius: 10
      },
      buttonContent: {
        top: 110,
        width: width-20,
        height: height/18,
        margin: 10,
        borderColor: '#ffffff90', 
        backgroundColor: '#ffffff40',
        borderWidth: 1, 
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backfaceVisibility: 'visible'
      },
      editprofilebutton: {
        color: 'white', 
        fontSize: 16, 
        fontWeight: 'bold',
      },
      profilePicture: {
        // flex: 1,
        width: height/7, 
        height: height/7, 
        borderRadius: 100, 
        // position: 'absolute', 
        top: 100,
        left: 30
      }
})