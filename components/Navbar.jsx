import { View } from "react-native"
import { StyleSheet } from "react-native"
import { BagIcon, CartIcon, HeartIcon, LogoIcon, UserIcon } from "./Svgs"
import { SIZE, COLORS} from "../constants.json"

const Navbar = () => {
  return (
    <View style={style.navContainer}>
        <LogoIcon />
        <BagIcon />
        <HeartIcon />
        <UserIcon />
    </View>
  )
}

export default Navbar

const style = StyleSheet.create({
    navContainer: {
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