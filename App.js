import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/SplashScreen';
import Home from './screens/HomeScreen';
import Categories from './screens/Categories';
import { SIZE } from "./constants.json"
import Category from './screens/Category';
import Product from './screens/Product';
import Reviews from './screens/Reviews';
import NewReview from './screens/NewReview';
import Filters from './screens/Filters';
import FilterOptions from './screens/FilterOptions';
import Sort from './screens/Sort';
import ProductInformation from './screens/ProductInformation';
import OrderSuccess from './screens/OrderSuccess';
import Checkout from './components/Checkout';
import Bag from './components/Bag';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Bag'>
        {/* <Stack.Navigator > */}
          <Stack.Group screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='Category' component={Category} />
            <Stack.Screen name='Product' component={Product} />
            <Stack.Screen name='Reviews' component={Reviews} />
            <Stack.Screen name='NewReview' component={NewReview} />
            <Stack.Screen name='FilterOptions' component={FilterOptions} />
            <Stack.Screen name='Checkout' component={Checkout} />
            <Stack.Screen name='Bag' component={Bag} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'containedTransparentModal', headerShown: false}}>
            <Stack.Screen name='Sort' component={Sort}/>
            <Stack.Screen name='ProductInformation' component={ProductInformation}/>
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'fullScreenModal', headerShown: false}}>
            <Stack.Screen name='Filters' component={Filters} />
            <Stack.Screen name='OrderSuccess' component={OrderSuccess}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export const globalStyle = StyleSheet.create({
//   heading0: {
//     fontSize: 48,
//     lineHeight: 72,
//     fontWeight: 600,
//     color: 
//   }
// })
