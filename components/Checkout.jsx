import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SIZE, COLORS } from '../constants.json'
import { Body1, Heading2, Body2, Body3 } from './TextComponents'
import PrimaryButton from './PrimaryButton'
import { useState } from 'react'
import { ImageGetter } from '../Utils'
import { CheckboxCircle } from './Elements'
import { LeftArrowIcon } from './Svgs'
import { useNavigation } from '@react-navigation/native'

const Checkout = () => {
    const navigation = useNavigation()
    const [selectedMethod, setSelectedMethod] = useState('')
    const goBack = () => navigation.goBack()
    return (
        <View style={style.container}>
            <View style={{ position: 'relative', alignItems: 'center', }}>
                <TouchableOpacity onPress={goBack} style={{ position: 'absolute', left: 0, top: SIZE }}> 
                    <LeftArrowIcon /> 
                </TouchableOpacity>
                <Body1>Checkout</Body1>
                <Body3 style={{ color: COLORS.gray[500] }}>3 of 3</Body3>
            </View>
            <Heading2 style={style.header}>payment method</Heading2>
            <View style={style.methodsContainer}>
                {paymentOptions.map(method => (
                    <RenderMethod
                        method={method}
                        selected={selectedMethod}
                        setSelected={setSelectedMethod}
                    />
                ))}
            </View>
            <PrimaryButton style={style.button} text="Pay $420.00" onPress={{}} />
        </View>
    )
}

export default Checkout

const style = StyleSheet.create({
    header: {
        marginTop: SIZE * 3,
        marginBottom: SIZE * 5
    },
    button: {
        marginTop: 'auto',
        marginBottom: SIZE * 5
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZE * 10,
        paddingHorizontal: SIZE * 2
    },
    methodsContainer: {
        gap: SIZE * 2
    },
    methodList: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    methodImageBox: {
        width: SIZE * 4
    },
    methodDetails: {
        marginLeft: SIZE * 2,
        marginRight: 'auto'
    },
    methodName: {
        fontWeight: 400
    },
    methodExp: {
        color: COLORS.gray[500],
        fontWeight: 400
    }
})


const RenderMethod = ({ method, selected, setSelected }) => {
    return (
        <TouchableOpacity onPress={() => setSelected(method.name)} style={style.methodList}>
            <View style={style.methodImageBox}>
                <ImageGetter
                    imageName={method.imageName}
                    style={{}}
                />
            </View>
            <View style={style.methodDetails}>
                <Body1 style={style.methodName}>{method.name}</Body1>
                {method.exp ? <Body2 style={style.methodExp}>{method.exp}</Body2> : null}
            </View>
            <CheckboxCircle isChecked={selected === method.name} />
        </TouchableOpacity>
    )
}

const paymentOptions = [
    {
        name: 'Mastercard 9833',
        exp: '734, Exp: 12/29',
        imageName: 'mastercard'
    },
    {
        name: 'Visa 723',
        exp: '734, Exp: 12/29',
        imageName: 'visa'
    },
    {
        name: 'Apple pay',
        imageName: 'apple_pay'
    },
]
