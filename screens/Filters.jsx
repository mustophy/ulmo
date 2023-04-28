import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { CloseIcon } from '../components/Svgs'
import { Body1 } from '../components/TextComponents'
import { SIZE, COLORS } from '../constants.json'
import { FlexBetween } from '../components/FlexComponents'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

const Filters = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: SIZE * 2, paddingTop: SIZE * 9 }}>
            <FlexBetween style={style.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CloseIcon />
                </TouchableOpacity>
                <Body1>Filter</Body1>
                <Body1>Clear</Body1>
            </FlexBetween>
            <FlexBetween>
                <Body1>$0</Body1>
                <Body1>$700</Body1>
            </FlexBetween>

            <View style={style.filterContainer}>
                {options.map(option => (
                    <TouchableOpacity onPress={() => navigation.navigate("FilterOptions", { name: option.name})} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Body1 style={{ fontWeight: 400 }}>{option.name}</Body1>
                        <Body1 style={{ fontWeight: 400, color: COLORS.gray[500] }}>{option.value}</Body1>
                    </TouchableOpacity>
                ))}
            </View>
            <PrimaryButton text="Show 25 items" style={style.button} />
        </View>
    )
}

export default Filters

const style = StyleSheet.create({
    headerContainer: {
        marginBottom: SIZE * 4.5
    },
    filterContainer: {
        gap: SIZE * 5,
        marginTop: SIZE * 4.5
    },
    button: {
        marginTop: 'auto',
        marginBottom: SIZE * 7
    }
})

const options = [
    {
        name: 'Category',
        value: 'furniture'
    },
    {
        name: 'Product type',
        value: 'All'
    },
    {
        name: 'Color',
        value: 'All'
    },
    {
        name: 'Size',
        value: 'All'
    },
    {
        name: 'Quality',
        value: 'All'
    }
]