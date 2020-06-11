import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Resultados({ route }) {
    const navigation = useNavigation();
    const { 
        realflow, 
        realpimax, 
        realpemax, 
        realci, 
        realcv,
        calcflow,
        calcpimax,
        calcpemax,
        calcci,
        calccv,
        weight,
        pideal 
    } = route.params;

    function navigateToDados() {
        navigation.navigate('Dados');
    };

    return (
        <View style={ styles.container }>
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
                        <Text style={styles.tableCell}> > 357,6</Text>
                        <Text style={styles.tableCell}>Zona Verde</Text>
                    </View>

                     
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>PIMax</Text>
                        <Text style={styles.tableCell}>{realpimax}</Text>
                        <Text style={styles.tableCell}>{calcpimax}</Text>
                        <Text style={styles.tableCell}> > ou = 357,6</Text>
                        <Text style={styles.tableCell}>Zona Verde</Text>
                    </View>

                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>PEMax</Text>
                        <Text style={styles.tableCell}>{realpemax}</Text>
                        <Text style={styles.tableCell}>{calcpemax}</Text>
                        <Text style={styles.tableCell}> > ou = 357,6</Text>
                        <Text style={styles.tableCell}>Zona Verde</Text>
                    </View>
                    
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>CI</Text>
                        <Text style={styles.tableCell}>{realci}</Text>
                        <Text style={styles.tableCell}>{calcci}</Text>
                        <Text style={styles.tableCell}> > ou = 357,6</Text>
                        <Text style={styles.tableCell}>Zona Verde</Text>
                    </View>
 
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>CV</Text>
                        <Text style={styles.tableCell}>{realcv}</Text>
                        <Text style={styles.tableCell}>{calccv}</Text>
                        <Text style={styles.tableCell}> > 357,6</Text>
                        <Text style={styles.tableCell}>Zona Verde</Text>
                    </View>

                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>Peso Ideal</Text>
                        <Text style={styles.tableCell}>{weight}</Text>
                        <Text style={styles.tableCell}>{pideal}</Text>
                        <Text style={styles.tableCell}>{weight-pideal}</Text>
                        <Text style={styles.tableCell}>Zona Verde</Text>
                    </View>

                </View>
            </ScrollView>
            
            <TouchableOpacity style={ styles.button } onPress={ navigateToDados }>
                <Text style={ styles.buttonText } >Voltar</Text>
            </ TouchableOpacity>
        </View>
    );
}
