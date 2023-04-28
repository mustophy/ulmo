import { View, Text } from 'react-native'
import React from 'react'
import Index from '../screens/Bag/Index'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Bag = () => {
    const Stack = createNativeStackNavigator()
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='BagHome' component={Index}/>
            </Stack.Navigator>
        </View>
    )
}

export default Bag