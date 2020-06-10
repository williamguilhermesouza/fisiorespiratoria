import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Resultados() {
    const navigation = useNavigation();

    function navigateToDados() {
        navigation.navigate('Dados');
    };

    return (
        <View style={ styles.container }>
            <ScrollView horizontal>
                <View style={styles.container}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableHeaderText}>Aparelho</Text>
                        <Text style={styles.tableHeaderText}>Predito</Text>
                        <Text style={styles.tableHeaderText}>Alvo Terapêutico</Text>
                        <Text style={{...styles.tableHeaderText, paddingTop: 0}}>Condições {'\n'} do Paciente</Text>
                    </View>
                    
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>Peak Flow</Text>
                        <Text style={styles.tableCell}>447</Text>
                        <Text style={styles.tableCell}> > 357,6</Text>
                        <Text style={styles.tableCell}>Zona Verde</Text>
                    </View>

                     
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>PIMax</Text>
                        <Text style={styles.tableCell}>447</Text>
                        <Text style={styles.tableCell}> > ou = 357,6</Text>
                        <Text style={styles.tableCell}>Zona Verde</Text>
                    </View>

                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>PEMax</Text>
                        <Text style={styles.tableCell}>447</Text>
                        <Text style={styles.tableCell}> > ou = 357,6</Text>
                        <Text style={styles.tableCell}>Zona Verde</Text>
                    </View>
                    
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>CI</Text>
                        <Text style={styles.tableCell}>447</Text>
                        <Text style={styles.tableCell}> > ou = 357,6</Text>
                        <Text style={styles.tableCell}>Zona Verde</Text>
                    </View>
 
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>CV</Text>
                        <Text style={styles.tableCell}>447</Text>
                        <Text style={styles.tableCell}> > 357,6</Text>
                        <Text style={styles.tableCell}>Zona Verde</Text>
                    </View>

                    <View style={styles.tableHeader}>
                        <Text style={styles.tableCell}>P Ideal</Text>
                        <Text style={styles.tableCell}>447</Text>
                        <Text style={styles.tableCell}>357,6</Text>
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
