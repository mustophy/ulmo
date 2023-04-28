import { View, StyleSheet } from "react-native"
import { COLORS } from "../constants.json"
import { Heading0 } from "../components/TextComponents"
import { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"

const Splash = () => {
    const navigator = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigator.navigate('Home')
        }, 1500)
    }, [])
    return (
        <View style={style.splashContainer}>
            <Heading0>ulmo</Heading0>
        </View>
    )
}

export default Splash

const style = StyleSheet.create({
    splashContainer: {
        height: '100%',
        backgroundColor: COLORS.yellow[300],
        justifyContent: 'center',
        alignItems: 'center'
    }
})