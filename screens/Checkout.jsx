import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContactInfo from './Checkout/ContactInfo'
import DeliveryDetails from './Checkout/DeliveryDetails'
import PaymentMethod from './Checkout/PaymentMethod'
import Delivery from './Checkout/Delivery'
import OrderSuccess from './Checkout/OrderSuccess'

const Checkout = () => {
  const Stack = createNativeStackNavigator()
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ContactInfo'>
        <Stack.Screen name="ContactInfo" component={ContactInfo} />
        <Stack.Screen name="Delivery Details" component={DeliveryDetails} />
        <Stack.Screen name="Payment Method" component={PaymentMethod} />

        <Stack.Group screenOptions={{ presentation: 'formSheet'}}>
          <Stack.Screen name='Order Success' component={OrderSuccess}/>
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'containedTransparentModal' }}>
          <Stack.Screen name='Delivery Address' component={Delivery} />
        </Stack.Group>
      </Stack.Navigator>
    </View>
  )
}

export default Checkout