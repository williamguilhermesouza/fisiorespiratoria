import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Dados from './pages/Dados';
import Resultados from './pages/Resultados';

function headerOptions(title) {
    return {
        title: title,
        headerStyle: {
            backgroundColor: '#000000',
        },
        headerTintColor: '#FFF',
    };
}

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name='Dados' component={Dados} options={headerOptions('Dados do Paciente')} />
                <AppStack.Screen name='Resultados' component={Resultados} options={headerOptions('Resultados')} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}

