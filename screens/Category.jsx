import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { SIZE, COLORS } from '../constants.json'
import SearchInput from '../components/SearchInput'
import { FilterIcon, LeftArrowIcon, SortIcon } from '../components/Svgs'
import { Body1, Body2, Heading2 } from '../components/TextComponents'
import ProductCard from '../components/ProductCard'
import { useNavigation } from '@react-navigation/native'

const Category = ({ route }) => {
    const { params: { name } } = route
    const navigation = useNavigation()
    const toFilters = () => navigation.navigate('Filters')
    const toSort = () => navigation.navigate('Sort')

    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: SIZE * 7 }}>
            <View style={{ paddingHorizontal: SIZE * 2, position: 'relative' }}>
                <View style={{ position: 'relative', flexDirection: 'row', justifyContent: 'center', marginBottom: SIZE * 3 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 0, top: 6, height: '100%', alignItems: 'center' }}>
                        <LeftArrowIcon />
                    </TouchableOpacity>
                    <Body1 style={style.title}>{name}</Body1>
                </View>
                <SearchInput style={{ marginBottom: SIZE * 2 }} />
                <View style={style.filtersContainer}>
                    <TouchableOpacity onPress={toSort} style={style.filter}>
                        <Body2>Sort</Body2>
                        <SortIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.filter} onPress={toFilters}>
                        <Body2>Filter</Body2>
                        <FilterIcon />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={style.productsContainer}>
                        {products.map((product, index) => (
                            <View key={index} style={style.product}>
                                <ProductCard product={product} />
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Category

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
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SIZE * 3,
        gap: 16
    },
    filter: {
        backgroundColor: COLORS.gray[100],
        height: SIZE * 4.5,
        borderRadius: SIZE / 2,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: SIZE,
        flexDirection: 'row'
    },
    productsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        rowGap: 24
    },
    product: {
        width: '48%'
    }
})

const products = [
    {
        imageName: 'bedside_table',
        description: 'wooden bedside table featuring',
        price: '159.00'
    },
    {
        imageName: 'wooden_chair',
        description: 'wooden bedside table featuring',
        price: '180.00'
    },
    {
        imageName: 'bedroom',
        description: 'wooden bedside table featuring',
        price: '45.00'
    },
    {
        imageName: 'bedside_table',
        description: 'wooden bedside table featuring',
        price: '159.00'
    },
    {
        imageName: 'bedside_table',
        description: 'wooden bedside table featuring',
        price: '159.00'
    },
    {
        imageName: 'wooden_chair',
        description: 'wooden bedside table featuring',
        price: '180.00'
    },
    {
        imageName: 'bedroom',
        description: 'wooden bedside table featuring',
        price: '45.00'
    },
    {
        imageName: 'bedside_table',
        description: 'wooden bedside table featuring',
        price: '159.00'
    },
    {
        imageName: 'bedside_table',
        description: 'wooden bedside table featuring',
        price: '159.00'
    },
    {
        imageName: 'wooden_chair',
        description: 'wooden bedside table featuring',
        price: '180.00'
    },
    {
        imageName: 'bedroom',
        description: 'wooden bedside table featuring',
        price: '45.00'
    },
    {
        imageName: 'bedside_table',
        description: 'wooden bedside table featuring',
        price: '159.00'
    },

]