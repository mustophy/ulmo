import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SIZE, COLORS } from '../constants.json'
import { Body1 } from '../components/TextComponents'
import { LeftArrowIcon } from '../components/Svgs'
import { FlexBetween } from '../components/FlexComponents'
import { useNavigation } from '@react-navigation/native'

const Settings = () => {
    const navigation = useNavigation()
    const goBack = () => navigation.goBack()
    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity style={style.leftArrow} onPress={goBack}>
                    <LeftArrowIcon />
                </TouchableOpacity>
                <Body1>Settings</Body1>
            </View>
            <View style={style.contentContainer}>
                <FlexBetween>
                    <Body1 style={style.title}>Deliver to</Body1>
                    <Body1 style={style.subtitle}>Great Britain</Body1>
                </FlexBetween>
                <FlexBetween>
                    <Body1 style={style.title}>Currency</Body1>
                    <Body1 style={style.subtitle}>$USD</Body1>
                </FlexBetween>
                <FlexBetween>
                    <Body1 style={style.title}>Notifications</Body1>
                    <Body1 style={style.subtitle}>Great Britain</Body1>
                </FlexBetween>
                <FlexBetween>
                    <Body1 style={style.title}>Terms and conditions</Body1>
                </FlexBetween>
            </View>
        </View>
    )
}

export default Settings

const style = StyleSheet.create({
    container: {
        paddingTop: SIZE * 7,
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: SIZE * 2
    },
    header: {
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center'
    },
    leftArrow: {
        position: 'absolute',
        left: 0
    },
    contentContainer: {
        gap: SIZE * 5,
        marginTop: SIZE * 4.5
    },
    title: {
        fontWeight: 400,
        color: COLORS.black
    },
    subtitle: {
        fontWeight: 400,
        color: COLORS.gray[500]
    }
})