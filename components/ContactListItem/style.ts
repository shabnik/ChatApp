import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
    },

    leftContainer: {
        flexDirection: 'row',
    },

    midContainer: {
        justifyContent: 'space-around',
    },

    userName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    
    avatar: {
        width: 55,
        height: 55,
        marginRight: 20,
        borderRadius: 50,
    }
});
export default styles; 