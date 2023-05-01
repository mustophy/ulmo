import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Layout } from '../components/Elements'
import { Body1, Body2, Body3, Heading1 } from '../components/TextComponents'
import SearchInput from '../components/SearchInput'
import { CloseCircularIcon, FilterIcon, SortIcon } from '../components/Svgs'
import { Flex } from '../components/FlexComponents'
import { SIZE, COLORS } from '../constants.json'
import { ImageGetter } from '../Utils'
import Navbar from '../components/Navbar'

const SavedItems = () => {
    const toSort = () => { }
    const toFilters = () => { }
    return (
        <Layout>
            <Heading1 style={style.header}>saved items</Heading1>
            <SearchInput />
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
            <ItemRow />
            <Navbar />
        </Layout>
    )
}

export default SavedItems

const style = StyleSheet.create({
    header: {
        marginBottom: SIZE * 3,
        marginTop: SIZE * 5,
        position: 'relative',
        alignItems: 'center',
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
        marginTop: SIZE * 2,
        justifyContent: 'center',
        flex: 1,
        gap: SIZE,
        flexDirection: 'row'
    },
})

const ItemRow = ({ product = products[0] }) => {
    return (
        <Flex style={itemRowStyle.container}>
            <ImageGetter
                style={itemRowStyle.image}
                imageName={product.imageName}
            />
            <View style={itemRowStyle.details}>
                <Body1>${product.price}</Body1>
                <Body3 style={itemRowStyle.description}>{product.description}</Body3>
                <TouchableOpacity style={itemRowStyle.button}>
                    <Body2>Move to bag</Body2>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <CloseCircularIcon />
            </TouchableOpacity>
        </Flex>
    )
}

const itemRowStyle = StyleSheet.create({
    container: {
        width: '100%'
    },
    description: {
        fontWeight: 400,
        marginTop: SIZE / 2,
        color: COLORS.gray[500]
    },
    details: {
        marginLeft: SIZE * 2,
        flex: 1
    },
    image: {
        height: 115,
        width: 94,
        borderRadius: SIZE
    },
    button: {
        backgroundColor: COLORS.yellow[400],
        borderRadius: SIZE,
        alignItems: 'center',
        marginTop: 'auto',
        justifyContent: 'center',
        height: SIZE * 4.5,
        width: SIZE * 15
    }
})

const products = [
    {
        price: '875.00',
        description: 'Wooden bedside table featuring a raised design',
        imageName: 'bedroom'
    }
]