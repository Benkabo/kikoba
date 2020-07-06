import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

export default function Drawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
