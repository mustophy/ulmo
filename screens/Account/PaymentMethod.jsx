import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SIZE, COLORS } from '../../constants.json'
import { Body1, Heading2, Body2, Body3 } from '../../components/TextComponents'
import PrimaryButton from '../../components/PrimaryButton'
import { useState } from 'react'
import { ImageGetter } from '../../Utils'
import { CheckboxCircle } from '../../components/Elements'
import { LeftArrowIcon } from '../../components/Svgs'
import { useNavigation } from '@react-navigation/native'

const PaymentMethod = () => {
    const navigation = useNavigation()
    const [selectedMethod, setSelectedMethod] = useState('')
    const goBack = () => navigation.goBack()
    const toOrderSuccess = () => navigation.navigate('Order Success')
    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={goBack} style={{ position: 'absolute', left: 0, height: '100%', justifyContent: 'center' }}> 
                    <LeftArrowIcon /> 
                </TouchableOpacity>
                <Body1>Payment methods</Body1>
            </View>
            <View style={style.methodsContainer}>
                {paymentOptions.map(method => (
                    <RenderMethod
                        key={method.name}
                        method={method}
                        selected={selectedMethod}
                        setSelected={setSelectedMethod}
                    />
                ))}
            </View>
            <PrimaryButton onPress={toOrderSuccess} style={style.button} text="Pay $420.00" />
        </View>
    )
}

export default PaymentMethod

const style = StyleSheet.create({
    header: {
        marginBottom: SIZE * 5,
        alignItems: 'center'
    },
    button: {
        marginTop: SIZE * 4,
        backgroundColor: COLORS.gray[100]
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
