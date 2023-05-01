import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Body1, Heading1 } from '../components/TextComponents'
import { FlexBetween } from '../components/FlexComponents'
import { CheckboxCircle } from '../components/Elements'
import { SIZE, COLORS } from '../constants.json'
import { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

const Sort = () => {
    const navigation = useNavigation()
    const [ sortMethod, setSortMethod ] = useState('')
    const goBack = () => navigation.goBack()
    return (
        <View style={{ flex: 1, position: 'relative',}}>
            <TouchableOpacity onPress={goBack} style={{ height: '100%', zIndex: 19, backgroundColor: COLORS.black, opacity: 0.5}}>

            </TouchableOpacity>
            <View style={sortStyle.container}>
                <Heading1>sort by</Heading1>
                <View style={sortStyle.sortList}>
                    {sortOptions.map(sort => <SortElement key={sort} isChecked={sort === sortMethod } setChecked={setSortMethod} sort={sort} />)}
                </View>
                <PrimaryButton text="Cancel" onPress={goBack} style={sortStyle.button}/>
            </View>
        </View>
    )
}

const sortStyle = StyleSheet.create({
    container: {
        marginTop: 'auto',
        paddingHorizontal: SIZE * 2,
        paddingTop: SIZE * 7,
        borderTopRightRadius: SIZE * 4,
        borderTopLeftRadius: SIZE * 4,
        position: 'absolute',
        zIndex: 40,
        width: '100%',
        bottom: 0,
        borderColor: 'purple',
        borderTopWidth: SIZE / 4,
        backgroundColor: COLORS.white
    },
    button: {
        marginBottom: SIZE * 7,
        backgroundColor: COLORS.gray[100],
        marginTop: SIZE * 4.5 
    },
    sortList: {
        marginTop: SIZE * 4.5,
        gap: SIZE * 5,
    }
})

const SortElement = ({ sort, isChecked, setChecked }) => {
    return (
        <FlexBetween isTouchable={true} onPress={() => setChecked(sort)}>
            <Body1 style={{ fontWeight: 400 }}>{sort}</Body1>
            <CheckboxCircle isChecked={isChecked} setChecked={setChecked} />
        </FlexBetween>
    )
}

export default Sort

const sortOptions = [
    "Price: high to low",
    "Price: low to high",
    "New first",
    "Popular first",
]