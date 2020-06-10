import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

export default function Dados() {
    return (
        <View style={ styles.container }>
            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>Sexo</ Text>
                <TextInput style={ styles.textInput } placeholder='M/F' />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>Idade</ Text>
                <TextInput style={ styles.textInput } placeholder='anos' />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>Altura</ Text>
                <TextInput style={ styles.textInput } placeholder='cm' />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>Peso</ Text>
                <TextInput style={ styles.textInput } placeholder='Kg' />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>Peak Flow</ Text>
                <TextInput style={ styles.textInput } placeholder='xx' />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>PIMax</ Text>
                <TextInput style={ styles.textInput } placeholder='xx' />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>PEMax</ Text>
                <TextInput style={ styles.textInput } placeholder='xx' />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>CI</ Text>
                <TextInput style={ styles.textInput } placeholder='xx' />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>CV</ Text>
                <TextInput style={ styles.textInput } placeholder='xx' />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>P Ideal</ Text>
                <TextInput style={ styles.textInput } placeholder='xx' />
            </ View>


            <TouchableOpacity style={ styles.button } onPress={ () => {} }>
                <Text style={ styles.buttonText } >Calcular</Text>
            </ TouchableOpacity>
        </View>
    );
};
