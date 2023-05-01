import { View, Text, TouchableOpacity } from 'react-native'
import { Layout } from '../../components/Elements'
import { LeftArrowIcon, SortIcon, FilterIcon } from '../../components/Svgs'
import { Body1, Body2 } from '../../components/TextComponents'
import SearchInput from '../../components/SearchInput'
import { StyleSheet } from 'react-native'
import { FlexBetween } from '../../components/FlexComponents'
import { ImageGetter } from '../../Utils'
import { SIZE, COLORS} from '../../constants.json'
import { useNavigation } from '@react-navigation/native'


const MyOrders = () => {
    const navigation = useNavigation()
    const toSort = () => {}
    const toFilters = () => {}
    const goBack = () => navigation.goBack()
    return (
        <Layout>
            <View style={style.header}>
                <TouchableOpacity style={{ position: 'absolute', left: 0, top: 4}} onPress={goBack}>
                    <LeftArrowIcon />
                </TouchableOpacity>
                <Body1>My orders</Body1>
            </View>
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
            <View>
                <SingleOrder />
            </View>
        </Layout>
    )
}

export default MyOrders

const style = StyleSheet.create({
    header: {
        marginBottom: SIZE * 3,
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
        marginBottom: SIZE * 3,
        justifyContent: 'center',
        flex: 1,
        gap: SIZE,
        flexDirection: 'row'
    },
})

const SingleOrder = () => {
    return (
        <View>
            <FlexBetween>
                <Body1 style={orderStyle.title}>Yesterday, 10:00 am</Body1>
                <Body1 >$420.50</Body1>
            </FlexBetween>
            <FlexBetween>
                <Body1 style={orderStyle.subtitle}>Waiting for payment</Body1>
                <Body1 style={orderStyle.subtitle}>#23124</Body1>
            </FlexBetween>
            <View style={orderStyle.imageContainer}>
                <ImageGetter 
                    imageName="kitchen"
                    style={orderStyle.image}
                />
                <ImageGetter 
                    imageName="bedroom"
                    style={orderStyle.image}
                />
            </View>
        </View>
    )
}

const orderStyle = StyleSheet.create({
    title: {
        fontWeight: 400,
    },
    subtitle: {
        fontWeight: 400,
        color: COLORS.gray[500]
    },
    imageContainer: {
        marginTop: SIZE * 2.25,
        flexDirection: 'row',
        gap: SIZE * 1.5
    },
    image: {
        height: SIZE * 9,
        width: SIZE * 7.5,
        borderRadius: SIZE
    }
})