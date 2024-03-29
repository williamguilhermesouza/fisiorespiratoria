import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
    },

    inputView: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#E3E9FB',
        width: '70%',
        borderRadius: 6,
    },

    inputText: {
        width: '40%',
        height: '100%',
        backgroundColor: '#BBCEFF',
        borderRadius: 6,
        textAlign: 'center',
    },

    textInput: {
        width: '60%',
        height: '100%',
        marginLeft: 10,
    },

    button: {
        width: '35%',
        height: 50,
        marginTop: 60,
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: '#000',
        bottom: 10,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 18,
        paddingTop: 8,
    },
})
