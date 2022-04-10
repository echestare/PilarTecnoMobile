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
      buttonContent: {
        width: width,
        alignItems: 'center',
      },
      title: {
        width: width,
        backgroundColor: '#3465a490',
        fontSize: 10,
        fontWeight: 'bold',
        color:'#dadce0',
        textAlign: 'center',
        borderRadius: 20,
      }
})