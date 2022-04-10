import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        flex: .75,
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
        backgroundColor: '#3465a460',
        backfaceVisibility: 'visible'
      },
      title: {
        backgroundColor: '#3465a490',
        fontSize: 10,
        fontWeight: 'bold',
        color:'#dadce0',
        textAlign: 'center',
        borderRadius: 20,
      }
})