import { TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native"
import { BagIcon, CartIcon, HeartIcon, LogoIcon, UserIcon } from "./Svgs"
import { SIZE, COLORS } from "../constants.json"
import { useNavigation, useRoute } from "@react-navigation/native"

const Navbar = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const toHome = () => navigation.navigate('Home')
  const toBag = () => navigation.navigate('Bag')
  const toAccount = () => navigation.navigate('Account')
  const toSavedItems = () => navigation.navigate('SavedItems')

  return (
    <View style={style.navContainer}>
      <TouchableOpacity onPress={toHome}>
        <LogoIcon isActive={route.name === 'Home'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={toBag}>
        <BagIcon isActive={route.name === 'Bag'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={toSavedItems}>
        <HeartIcon isActive={route.name === "SavedItems"}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={toAccount}>
        <UserIcon isActive={route.name === "Account"}/>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar

const style = StyleSheet.create({
  navContainer: {
    marginTop: 'auto',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZE * 4.25,
    borderTopColor: COLORS.gray[200],
    borderTopWidth: SIZE / 4,
    height: SIZE * 10
  }
})