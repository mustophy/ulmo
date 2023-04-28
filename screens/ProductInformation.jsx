import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZE, COLORS } from '../constants.json'
import { Body1, Heading1, Heading2 } from '../components/TextComponents'
import { CloseIcon } from '../components/Svgs'
import { FlexBetween } from '../components/FlexComponents'
import { useNavigation } from '@react-navigation/native'

const ProductInformation = () => {
    const navigation = useNavigation()
    const goBack = () => navigation.goBack()
    return (
        <View style={style.container}>
            <View style={{ height: '100%', backgroundColor: 'black', opacity: 0.6}}>

            </View>
            <View style={style.productContainer}>
                <TouchableOpacity onPress={goBack}>
                    <CloseIcon />
                </TouchableOpacity>
                <Heading1 style={style.header}>Product information</Heading1>
                <Heading2 style={style.subHeader}>measurements</Heading2>
                <View style={style.featureContainer}>
                    {measurements.map(measurement => (
                        <FlexBetween>
                            <Body1 style={style.featureName}>{measurement.name}</Body1>
                            <Body1 style={style.featureValue}>{measurement.value}</Body1>
                        </FlexBetween>
                    ))}
                </View>
                <Heading2 style={style.subHeader}>composition</Heading2>
                <View style={style.featureContainer}>
                    {composition.map(comp => (
                        <FlexBetween>
                            <Body1 style={style.featureName}>{comp.name}</Body1>
                            <Body1 style={style.featureValue}>{comp.value}</Body1>
                        </FlexBetween>
                    ))}
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        marginTop: SIZE * 2.5
    },
    productContainer: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: SIZE * 4,
        borderTopRightRadius: SIZE * 4,
        height: '80%',
        marginTop: 'auto',
        paddingHorizontal: SIZE * 2.5,
        paddingTop: SIZE * 4
    },
    subHeader: {
        marginVertical: SIZE * 4.5
    },
    featureContainer: {
        gap: SIZE * 5
    },
    featureName: {
        fontWeight: 400
    },
    featureValue: {
        fontWeight: 400,
        color: COLORS.gray[500]
    }
})

export default ProductInformation

const measurements = [
    {
        name: 'Height',
        value: '50 cm'
    },
    {
        name: 'Width',
        value: '40 cm'
    },
    {
        name: 'Depth',
        value: '35 cm'
    },
    {
        name: 'Weight',
        value: '11.7 kg'
    },
]

const composition = [
    {
        name: 'Main material',
        value: '100% Mango tree wood',
    },
    {
        name: 'Weight',
        value: '100% Chipboard',
    }
]