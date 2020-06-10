import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    inputView: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#E3E9FB',
        marginTop: '10%',
        width: '60%',
        borderRadius: 6,
        marginBottom: 40,
    },

    inputTextView: {
        position: 'relative',
        width: '40%',
        height: '100%',
        backgroundColor: '#BBCEFF',
        borderRadius: 6,
    },

    textInput: {
        position: 'relative',
        width: '60%',
        height: '100%',
    },

    button: {
        width: '35%',
        height: 50,
        borderRadius: 6,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },

    buttonText: {
        color: '#FFF',
        fontSize: 18,
        paddingTop: 8,
    },
})
