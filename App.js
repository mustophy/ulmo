import { StatusBar } from 'expo-status-bar';
import { RecoilRoot } from 'recoil';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/SplashScreen';
import Home from './screens/HomeScreen';
import Categories from './screens/Categories';
import Category from './screens/Category';
import Product from './screens/Product';
import Reviews from './screens/Reviews';
import Bag from './screens/Bag';
import NewReview from './screens/NewReview';
import Filters from './screens/Filters';
import FilterOptions from './screens/FilterOptions';
import Sort from './screens/Sort';
import ProductInformation from './screens/ProductInformation';
import OrderSuccess from './screens/Checkout/OrderSuccess';
import Checkout from './screens/Checkout';
import Account from './screens/Account';
import SavedItems from './screens/SavedItems';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <RecoilRoot>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar />
        <NavigationContainer>
          {/* <Stack.Navigator initialRouteName='SavedItems'> */}
          <Stack.Navigator >
            <Stack.Group screenOptions={{ headerShown: false }}>
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
              <Stack.Screen name='Account' component={Account} />
              <Stack.Screen name='SavedItems' component={SavedItems} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'containedTransparentModal', headerShown: false }}>
              <Stack.Screen name='Sort' component={Sort} />
              <Stack.Screen name='ProductInformation' component={ProductInformation} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'fullScreenModal', headerShown: false }}>
              <Stack.Screen name='Filters' component={Filters} />
              <Stack.Screen name='OrderSuccess' component={OrderSuccess} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </RecoilRoot>
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
