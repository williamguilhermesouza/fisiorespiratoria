import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
    },

    tableHeader: {
        flexDirection: 'row',
        height: 40,
        minWidth: 400,
        marginLeft: 5,
    },

    tableHeaderText: {
        backgroundColor: '#BBCEFF',    
        marginLeft: 1,
        minWidth: 100,
        textAlign: 'center',
        paddingTop: 8,
    },

    tableCell: {
        backgroundColor: '#E3E9FB',
        marginLeft: 1,
        marginTop: 1,
        minWidth: 100,
        textAlign: 'center',
        paddingTop: 8,
    },
    
    button: {
        width: '35%',
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: '#000',
        marginTop: '20%',
        marginBottom: '25%',
    },

    buttonText: {
        color: '#FFF',
        fontSize: 18,
        paddingTop: 8,
    },
});
