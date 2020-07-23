import React, { useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Resultados({ route }) {
    const navigation = useNavigation();
    const { 
        realflow, 
        realpimax, 
        realpemax, 
        realcv,
        calcflow,
        calcpimax,
        calcpemax,
        calccv,
        weight,
        pideal 
    } = route.params;

    let bgpeak, bgpi, bgpe, bgcv, bgpideal;
    let zonepeak, zonepi, zonepe, zonecv, zonepideal;

    function backgroundsAndConditions() {
        if (realflow > 0.8 * calcflow) {
            bgpeak = '#C0F1B8';
            zonepeak = 'Verde';

        } else if (realflow > 0.5 * calcflow) {
            bgpeak = '#FBFCCD';
            zonepeak = 'Amarela';

        } else {
            bgpeak = '#FFC9C9';
            zonepeak = 'Vermelha';
        };

        if (realpimax > 0.79 * calcpimax) {
            bgpi = '#C0F1B8';
            zonepi = 'Normal';
        } else if (realpimax > 0.59 * calcpimax) {
            bgpi = '#FBFCCD';
            zonepi = 'Leve';
        } else if (realpimax > 0.39 * calcpimax) {
            bgpi = '#FBFCCD';
            zonepi = 'Moderada';
        } else if (realpimax > 0.19 * calcpimax) {
            bgpi = '#FFC9C9';
            zonepi = 'Intensa'; 
        } else {
            bgpi = '#FFC9C9';
            zonepi = 'Muito intensa';
        };

        if (realpemax > 0.79 * calcpemax) {
            bgpe = '#C0F1B8';
            zonepe = 'Normal';
        } else if (realpemax > 0.59 * calcpemax) {
            bgpe = '#FBFCCD';
            zonepe = 'Leve';
        } else if (realpemax > 0.39 * calcpemax) {
            bgpe = '#FBFCCD';
            zonepe = 'Moderada';
        } else if (realpemax > 0.19 * calcpemax) {
            bgpe = '#FFC9C9';
            zonepe = 'Intensa'; 
        } else {
            bgpe = '#FFC9C9';
            zonepe = 'Muito intensa';
        };

        if (realcv > 0.64 * calccv) {
            bgcv = '#C0F1B8';
            zonecv = 'Normal';
        } else if (realcv > 0.59 * calccv) {
            bgcv = '#FBFCCD';
            zonecv = 'Leve';
        } else if (realcv > 0.5 * calccv) {
            bgcv = '#FBFCCD';
            zonecv = 'Moderado';
        } else {
            bgcv = '#FFC9C9';
            zonecv = 'Grave';
        };

        if (weight == pideal) {
            bgpideal = '#C0F1B8';
            zonepideal = 'Peso Ideal';
        } else if (weight > pideal) {
            bgpideal = '#FFC9C9';
            zonepideal = 'Acima';
        } else {
            bgpideal = '#FFC9C9';
            zonepideal = 'Abaixo';
        };

    };

    function navigateToDados() {
        navigation.navigate('Dados');
    };

    return (
        <View style={ styles.container }>
            {backgroundsAndConditions()}
            <ScrollView horizontal>
                <View style={styles.container}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableHeaderText}>Aparelho</Text>
                        <Text style={styles.tableHeaderText}>Paciente</Text>
                        <Text style={styles.tableHeaderText}>Predito</Text>
                        <Text style={styles.tableHeaderText}>Alvo Terapêutico</Text>
                        <Text style={{...styles.tableHeaderText, paddingTop: 0}}>Condições {'\n'} do Paciente</Text>
                    </View>
                    
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>Peak Flow</Text>
                        <Text style={styles.tableCell}>{realflow}</Text>
                        <Text style={styles.tableCell}>{calcflow}</Text>
                        <Text style={styles.tableCell}> > {(0.8 *calcflow).toFixed(2)}</Text>
                        <Text style={{...styles.tableCell, backgroundColor: bgpeak}}>Zona {zonepeak}</Text>
                    </View>

                     
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>PIMax</Text>
                        <Text style={styles.tableCell}>{realpimax}</Text>
                        <Text style={styles.tableCell}>{calcpimax.toFixed(2)}</Text>
                        <Text style={styles.tableCell}> > ou = {(0.8 * calcpimax).toFixed(2)}</Text>
                        <Text style={{...styles.tableCell, backgroundColor: bgpi}}>{zonepi}</Text>
                    </View>

                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>PEMax</Text>
                        <Text style={styles.tableCell}>{realpemax}</Text>
                        <Text style={styles.tableCell}>{calcpemax.toFixed(2)}</Text>
                        <Text style={styles.tableCell}> > ou = {(0.8 * calcpemax).toFixed(2)}</Text>
                        <Text style={{...styles.tableCell, backgroundColor: bgpe}}>{zonepe}</Text>
                    </View>
                    
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>CV</Text>
                        <Text style={styles.tableCell}>{realcv}</Text>
                        <Text style={styles.tableCell}>{calccv.toFixed(2)}</Text>
                        <Text style={styles.tableCell}> > {(0.8 * calccv).toFixed(2)}</Text>
                        <Text style={{...styles.tableCell, backgroundColor: bgcv}}>{zonecv}</Text>
                    </View>

                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>Peso Ideal</Text>
                        <Text style={styles.tableCell}>{weight}</Text>
                        <Text style={styles.tableCell}>{pideal.toFixed(2)}</Text>
                        <Text style={styles.tableCell}>{(pideal-weight).toFixed(2)}</Text>
                        <Text style={{...styles.tableCell, backgroundColor: bgpideal}}>{zonepideal}</Text>
                    </View>

                </View>
            </ScrollView>
            
            <TouchableOpacity style={ styles.button } onPress={ navigateToDados }>
                <Text style={ styles.buttonText } >Voltar</Text>
            </ TouchableOpacity>
        </View>
    );
}
