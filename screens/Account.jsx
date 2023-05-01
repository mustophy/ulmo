import { View } from 'react-native'
import Navbar from '../components/Navbar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountHome from './Account/AccountHome'
import Settings from './Settings'
import MyOrders from './Account/MyOrders'
import AddressBook from './Account/AddressBook'
import MyDetails from './Account/MyDetails'
import PaymentMethod from './Account/PaymentMethod'

const Account = () => {
    const Stack = createNativeStackNavigator()
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName='AccountHome'>
                <Stack.Screen name='AccountHome' component={AccountHome} />
                <Stack.Screen name='Settings' component={Settings} />
                <Stack.Screen name='My orders' component={MyOrders} />
                <Stack.Screen name='My details' component={MyDetails} />
                <Stack.Screen name='My address' component={AddressBook} />
                <Stack.Screen name='Payment methods' component={PaymentMethod} />
                {/* <Stack.Screen name='My orders' component={MyOrders} /> */}
            </Stack.Navigator>
            <Navbar />
        </View>
    )
}

export default Account

