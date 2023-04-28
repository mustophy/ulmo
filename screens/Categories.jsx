import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import SearchInput from "../components/SearchInput"
import { SIZE } from "../constants.json"
import { Body1, Heading2 } from "../components/TextComponents"
import Navbar from "../components/Navbar"
import { LeftArrowIcon } from "../components/Svgs"
import { ImageGetter } from "../Utils"
import { useNavigation } from "@react-navigation/native"

const Categories = ({ route }) => {
    const { params: { name } } = route
    const navigation = useNavigation()
    return (
        <View style={style.container}>
            <View style={{ paddingHorizontal: SIZE * 2, position: 'relative' }}>
                <View style={{ position: 'relative', flexDirection: 'row', justifyContent: 'center', marginBottom: SIZE * 3}}>
                    <TouchableOpacity style={{ position: 'absolute', left: 0, top: 6, height: '100%', alignItems: 'center'}}>
                        <LeftArrowIcon />
                    </TouchableOpacity>
                    <Body1 style={style.title}>{name}</Body1>
                </View>
                <SearchInput style={{ marginBottom: SIZE * 3 }} />
                <Heading2 style={style.header}>categories</Heading2>
            </View>
            <ScrollView style={{ width: '100%', paddingHorizontal: SIZE * 2 }}>
                <View style={style.categoriesContainer}>
                    {categories.map(category => (
                        <TouchableOpacity onPress={() => navigation.navigate('Category', { name: category.name})} key={category.name} style={style.categoryContainer}>
                            <ImageGetter
                                imageName={category.imageName}
                                style={style.categoryImage}
                            />
                            <Body1>{category.name}</Body1>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <Navbar />
        </View>
    )
}

export default Categories

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: SIZE * 3,
        backgroundColor: 'white',
    },
    title: {
        textAlign: "center",
        marginBottom: SIZE * 2
    },
    header: {
        marginBottom: SIZE * 3.75
    },
    categoriesContainer: {
        flexDirection: 'column'
    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SIZE * 3.5
    },
    categoryImage: {
        height: SIZE * 4.5,
        width: SIZE * 4.5,
        marginRight: SIZE * 2,
        borderRadius: SIZE * 2.25
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