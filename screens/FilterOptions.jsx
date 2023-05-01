import { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Body1 } from '../components/TextComponents'
import { FlexBetween } from '../components/FlexComponents'
import { SIZE, COLORS } from "../constants.json"
import { CheckmarkIcon, CloseIcon } from '../components/Svgs'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

const FilterOptions = ({ route }) => {
    const name = route.params?.name || 'a'
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: SIZE * 2, paddingTop: SIZE * 9 }}>
            <FlexBetween style={style.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CloseIcon />
                </TouchableOpacity>
                <Body1>{name}</Body1>
                <Body1>Clear</Body1>
            </FlexBetween>
            <ScrollView style={{ marginBottom: SIZE}} showsVerticalScrollIndicator={false}>
                <View style={style.categorySection}>
                    {categories.map(category => <RenderCategory key={category.name} category={category}/>)}
                </View>
            </ScrollView>
            <PrimaryButton text="Show 25 items" style={style.button} />
        </View>
    )
}

export default FilterOptions

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
        marginBottom: SIZE * 5
    },
    categorySection: {
        gap: SIZE * 5,
        paddingBottom: SIZE * 6,
    },
    categoryContainer: {
        height: SIZE * 3,
        width: SIZE * 3,
        borderRadius: SIZE * 3 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const categories = [
    {
        name: 'Furniture',
        imageName: 'furniture'
    },
    {
        name: 'Lighting',
        imageName: 'lighting'
    },
    {
        name: 'Rugs',
        imageName: 'rugs'
    },
    {
        name: 'Mirrors',
        imageName: 'mirrors'
    },
    {
        name: 'Blankets',
        imageName: 'blankets'
    },
    {
        name: 'Cushions',
        imageName: 'cushions'
    },
    {
        name: 'Curtains',
        imageName: 'curtains'
    },
    {
        name: 'Baskets',
        imageName: 'baskets'
    },
    {
        name: 'Vases',
        imageName: 'vases'
    },
    {
        name: 'Boxes',
        imageName: 'boxes'
    },
]

const RenderCategory = ({ category }) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <FlexBetween isTouchable={true} onPress={() => setIsChecked(!isChecked)}>
            <Body1 style={{ fontWeight: 400 }}>{category.name}</Body1>
            <View style={[style.categoryContainer, {backgroundColor: isChecked ? COLORS.yellow[400] : COLORS.gray[100]}]}>
                {isChecked ? <CheckmarkIcon /> : null}
            </View>
        </FlexBetween>
    )
}