import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Layout } from '../components/Elements'
import { Body1, Body2, Body3, Heading1 } from '../components/TextComponents'
import SearchInput from '../components/SearchInput'
import { CloseCircularIcon, FilterIcon, SortIcon } from '../components/Svgs'
import { Flex } from '../components/FlexComponents'
import { SIZE, COLORS } from '../constants.json'
import { removeFromFavorites } from '../atoms/favoritesAtom'
import { ImageGetter } from '../Utils'
import Navbar from '../components/Navbar'
import { useRecoilState } from 'recoil'
import favoritesAtom from '../atoms/favoritesAtom'

const SavedItems = () => {
    const toSort = () => { }
    const toFilters = () => { }
    const [favorites, setFavorites] = useRecoilState(favoritesAtom)
    const removeHandler = (product) => removeFromFavorites(favorites, product, setFavorites)
    const cartList = []
    favorites.forEach((favorite, index) => {
        cartList.push(
            <ItemRow
                product={favorite}
                key={`${favorite}${index}`}
                favorites={favorites}
                setFavorites={setFavorites}
                removeHandler={removeHandler}
            />
        )
    })
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
            <View style={style.listContainer}>
                {cartList}
            </View>
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
    listContainer: {
        gap: SIZE * 4
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

const ItemRow = ({ product = products[0], removeHandler }) => {
    return (
        <Flex style={itemRowStyle.container}>
            <ImageGetter
                style={itemRowStyle.image}
                imageName={product.images[0]}
            />
            <View style={itemRowStyle.details}>
                <Body1>${product.price}</Body1>
                <Body3 style={itemRowStyle.description}>{product.description}</Body3>
                <TouchableOpacity style={itemRowStyle.button}>
                    <Body2>Move to bag</Body2>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => removeHandler(product)}>
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