import { StyleSheet } from 'react-native';

import { color } from "../../utils";

const styles = StyleSheet.create({
    container: {
        height: 70,
        justifyContent:"space-between",
        alignItems: 'center',
        borderBottomColor: color.grayCart,
        borderBottomWidth: 1,
        paddingBottom: "3%",
    },
    contentLeft: {
        flex: 7,
        alignItems: 'center',
        paddingRight: 10,
    },
    contentRight:{
        width:"30%",
    },
    button: {
        backgroundColor: color.blueSky,
    },
});

export default styles;