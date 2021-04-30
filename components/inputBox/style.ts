import {StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'baseline',
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 30,
        marginRight: 10,
        flex: 1,
        alignItems: 'baseline',
    },
    buttonContainer: {
        backgroundColor: Colors.light.button,
        borderRadius: 40,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    icon: {
        marginHorizontal: 6,
    },


})
export default styles;