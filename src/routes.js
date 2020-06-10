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
    };
}

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name='Dados do Paciente' component={Dados} />
                <AppStack.Screen name='Resultados' component={Resultados} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

