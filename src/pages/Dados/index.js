import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

export default function Dados() {
    return (
        <View style={ styles.container }>
            <View style={ styles.inputView }>
                <View style={ styles.inputTextView }>
                    <Text>Sexo</ Text>
                </ View>
                <TextInput style={ styles.textInput } />
            </ View>

            <TouchableOpacity style={ styles.button } onPress={ () => {} }>
                <Text style={ styles.buttonText } >Calcular</Text>
            </ TouchableOpacity>
        </View>
    );
};
