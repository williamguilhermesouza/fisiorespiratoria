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

    function calculatePeakFlow() {
        let height_factor = Math.round(height / 5);
        const age_factor = Math.round(age / 5) - 4;
        let flowTable = [];
        let peakflowvalue = 0;

        if (sex == 'M') {
            height_factor -= 31;
            flowTable = [
                [564, 583, 601, 620, 639, 657],
                [553, 571, 589, 608, 626, 644],
                [541, 559, 577, 594, 612, 630],
                [530, 547, 565, 582, 599, 617],
                [518, 535, 552, 569, 586, 603],
                [507, 523, 540, 557, 573, 576],
                [494, 511, 527, 543, 560, 563],
                [483, 499, 515, 531, 547, 563],
                [471, 486, 502, 518, 533, 549],
                [460, 475, 490, 505, 520, 536],
                [448, 462, 477, 492, 507, 521]
            ];
        } else if (sex == 'F') {
            height_factor -= 29;
            flowTable = [
                [405, 418, 431, 445, 459, 473],
                [399, 412, 426, 440, 453, 467],
                [394, 407, 421, 434, 447, 461],
                [389, 402, 415, 428, 442, 455],
                [383, 396, 409, 422, 435, 448],
                [378, 391, 404, 417, 430, 442],
                [373, 386, 398, 411, 423, 436],
                [368, 380, 393, 405, 418, 430],
                [363, 375, 387, 399, 411, 424],
                [358, 370, 382, 394, 406, 418],
                [352, 364, 376, 388, 399, 411]
            ]; 
        };

        peakflowvalue = flowTable[age_factor][height_factor];
        return peakflowvalue;

};

    function calculatePMax() {
        let pivalue, pevalue;

        if (sex == 'M') {
            pivalue = 155.3 - (0.8 * age);
            pevalue = 165.4 - (0.81 * age);

        } else if (sex == 'F') {
            pivalue = 110.4 - (0.49 * age);
            pevalue = 115.6 - (0.61 * age);
        }; 

        return [pivalue, pevalue];
    };


    function calculatePideal() {
        let pidealvalue;
        
        if (sex == 'M') {
            pidealvalue = 50 + 0.91 * (height - 152.4);

        } else if (sex == 'F') {
            pidealvalue = 45.5 + 0.91 * (height - 152.4);
        };

        return pidealvalue;
    };

    function calculateCV(pvalue) {
        let cvvalue;

        if (sex == 'M') {
            cvvalue = 75 * pvalue;

        } else if (sex == 'F') {
            cvvalue = 65 * pvalue;
        };

        return cvvalue;
    };

    function calculateResults() {
        let calcflow, calcpimax, calcpemax, calcci, calccv, pideal;

        calcflow = calculatePeakFlow();
        [ calcpimax, calcpemax ] = calculatePMax();
        pideal = calculatePideal();
        calcci = 2600;
        calccv = calculateCV(pideal);
;

        const results = { calcflow, calcpimax, calcpemax, calcci, calccv, pideal };
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
