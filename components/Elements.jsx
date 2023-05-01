import { StyleSheet, View } from "react-native"
import { CheckmarkIcon } from "./Svgs"
import { SIZE, COLORS } from '../constants.json'
import { Body2 } from "./TextComponents"
import { useState } from "react"
import { TextInput } from "react-native"

export const CheckboxCircle = ({ isChecked = false, setChecked }) => (
    <View style={[checkStyle.container, { backgroundColor: isChecked ? COLORS.yellow[400] : COLORS.gray[100] }]}>
        {isChecked ? <CheckmarkIcon /> : null}
    </View>
)

const checkStyle = StyleSheet.create({
    container: {
        height: SIZE * 3,
        width: SIZE * 3,
        borderRadius: SIZE * 3 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

})

export const InputText = ({ label = '' }) => {
    const [text, setText] = useState('')
    return (
        <View style={textInputStyle.container}>
            <Body2 style={textInputStyle.label}>{label}</Body2>
            <TextInput style={textInputStyle.textStyle} value={text} onChangeText={e => setText(e)}/>
        </View>
    )
}

const textInputStyle = StyleSheet.create({
    container: {
        backgroundColor: COLORS.gray[100],
        borderRadius: SIZE,
        height: SIZE * 8,
        paddingHorizontal: SIZE * 2,
        justifyContent: 'center'
    },
    label: {
        color: COLORS.gray[400],
        fontSize: SIZE * 2,
        fontWeight: 400,
    },
    textStyle: {
        fontSize: SIZE * 2,
        color: COLORS.black,
    }
})

export const Layout = ({ children, style }) => (
    <View style={[
        { flex: 1, backgroundColor: 'white', paddingTop: SIZE * 10 , paddingHorizontal: SIZE * 2}, 
        style
    ]}>
        {children}
    </View>
)