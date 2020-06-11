import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Dados() {
    const navigation = useNavigation();
    let [sex, setSex] = useState('');
    let [age, setAge] = useState(0);
    let [height, setHeight] = useState(0.0);
    let [weight, setWeight] = useState(0.0);
    let [realflow, setRealflow] = useState(0.0);
    let [realpimax, setRealpimax] = useState(0.0);
    let [realpemax, setRealpemax] = useState(0.0);
    let [realci, setRealci] = useState(0.0);
    let [realcv, setRealcv] = useState(0.0);

    function calculateResults() {
        let calcflow, calcpimax, calcpemax, calcci, calccv, pideal;

        calcflow = 1;
        calcpimax = 2;
        calcpemax = 3;
        calcci = 4;
        calccv = 5;
        pideal = 0;

        const results = { calcflow, calcpimax, calcpemax, calcci, calccv, pideal }
        return results;
    };

    function navigateToResultados() {
        const results = calculateResults();
        if (sex == 'M' || sex == 'F') {
            navigation.navigate('Resultados', {
                realflow,
                realpimax,
                realpemax,
                realci,
                realcv,
                calcflow: results.calcflow,
                calcpimax: results.calcpimax,
                calcpemax: results.calcpemax,
                calcci: results.calcci,
                calccv: results.calccv,
                weight,
                pideal: results.pideal
            });
        }
    };

    return (
        <View style={ styles.container }>
            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>Sexo</ Text>
                <TextInput 
                    style={ styles.textInput } 
                    placeholder='M/F'
                    maxLength={1}
                    onChangeText={ text => setSex(text) }
                    onSubmitEditing={ (sex != 'M' && sex != 'F' && sex != '') ? Alert.alert('Sexo deve ser M ou F!!!') : console.log(sex) }
                    
                />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>Idade</ Text>
                <TextInput 
                    style={ styles.textInput } 
                    placeholder='anos' 
                    keyboardType='decimal-pad' 
                    onChangeText={ text => setAge(text) }
                />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>Altura</ Text>
                <TextInput 
                    style={ styles.textInput } 
                    placeholder='cm' 
                    onChangeText={ text => setHeight(text) }
                    keyboardType='decimal-pad'
                />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>Peso</ Text>
                <TextInput 
                    style={ styles.textInput } 
                    placeholder='Kg'
                    onChangeText={ text => setWeight(text) }
                    keyboardType='decimal-pad'
                />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>Peak Flow</ Text>
                <TextInput 
                    style={ styles.textInput } 
                    placeholder='L/minuto' 
                    onChangeText={ text => setRealflow(text) }
                    keyboardType='decimal-pad'
                />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>PIMax</ Text>
                <TextInput 
                    style={ styles.textInput } 
                    placeholder='cm.H2O' 
                    onChangeText={ text => setRealpimax(text) }
                    keyboardType='decimal-pad'
                />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>PEMax</ Text>
                <TextInput 
                    style={ styles.textInput } 
                    placeholder='cm.H2O' 
                    onChangeText={ text => setRealpemax(text) }
                    keyboardType='decimal-pad'
                />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>CI</ Text>
                <TextInput 
                    style={ styles.textInput } 
                    placeholder='ml'
                    onChangeText={ text => setRealci(text) }
                    keyboardType='decimal-pad'
                />
            </ View>

            <View style={ styles.inputView }>
                <Text style={ styles.inputText}>CV</ Text>
                <TextInput 
                    style={ styles.textInput } 
                    placeholder='ml/Kg'
                    onChangeText={ text => setRealcv(text) }
                    keyboardType='decimal-pad'
                />
            </ View>

            <TouchableOpacity style={ styles.button } onPress={ navigateToResultados }>
                <Text style={ styles.buttonText } >Calcular</Text>
            </ TouchableOpacity>
        </View>
    );
};
