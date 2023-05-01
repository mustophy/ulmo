import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { ImageGetter } from '../Utils'
import { SIZE, COLORS } from "../constants.json"
import PrimaryButton from '../components/PrimaryButton'
import { BagIcon2, CartIcon, HeartIcon, HeartIcon2, LeftArrowIcon, RightChevron } from '../components/Svgs'
import { Body1, Body2, Heading1, Heading2 } from '../components/TextComponents'
import ProductCard from '../components/ProductCard'
import { useNavigation } from '@react-navigation/native'
import { FlexBetween } from '../components/FlexComponents'
import { useState } from 'react'

const Product = ({ route }) => {
    const navigation = useNavigation()
    const [isLiked, setIsLiked] = useState(false)
    const { product } = route.params
    const goBack = () => navigation.goBack()
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ height: '55%', position: 'relative', }}>
                <FlexBetween style={{ position: 'absolute', zIndex: 3, top: SIZE * 8, width: '100%', paddingHorizontal: SIZE * 2}}>
                    <TouchableOpacity onPress={goBack} style={style.iconContainer}>
                        <LeftArrowIcon />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsLiked(!isLiked)} style={style.iconContainer}>
                        <HeartIcon2 isActive={isLiked}/>
                    </TouchableOpacity>
                </FlexBetween>
                <ImageGetter
                    imageName={product.imageName}
                    style={{ height: '100%', width: '100%' }}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: SIZE * 2, paddingBottom: SIZE * 6 }}>
                    {productDetails()}
                    {mightLike()}
                </View>
            </ScrollView>
        </View>
    )
}

export default Product

const product = {
    imageName: 'bedside_table',
    description: 'wooden bedside table featuring',
    price: '159.00'
}

const style = StyleSheet.create({
    iconContainer: {
        backgroundColor: 'white',
        height: SIZE * 4.5,
        width: SIZE * 4.5,
        borderRadius: SIZE * 2.25,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const mightLike = () => {
    return (
        <>
            <Heading2 style={{ marginTop: 44 }}>you might also like</Heading2>
            <View style={{ flexDirection: 'row', columnGap: 15, marginTop: SIZE * 4 }}>
                <View style={{ flex: 1 }}>
                    <ProductCard product={product} />
                </View>
                <View style={{ flex: 1 }}>
                    <ProductCard product={product} />
                </View>
            </View>
        </>
    )
}

const productDetails = () => {
    const navigation = useNavigation()
    const toInformation = () => navigation.navigate('ProductInformation')
    return (
        <>
            <View style={{ paddingVertical: SIZE * 3 }}>
                <Heading2>$150.00</Heading2>
                <Body1 style={{ color: COLORS.gray[500], marginTop: SIZE / 2, marginBottom: SIZE * 3 }}>Wooden bedside table featuring a raised design on the door</Body1>
                <PrimaryButton text="Add to bag" icon={<BagIcon2 />} />
            </View>
            <View style={{ backgroundColor: 'white', paddingVertical: 16 }}>
                <View style={productStyle.discountContainer}>
                    <Heading2>%</Heading2>
                    <View style={{ marginLeft: SIZE * 2, marginRight: 'auto' }}>
                        <Body1 style={{ fontWeight: 500 }}>Discount for you</Body1>
                        <Body2 style={{ color: COLORS.gray[500] }}>Use promocode ULMO</Body2>
                    </View>
                    <TouchableOpacity style={productStyle.copyContainer}>
                        <Body2>Copy</Body2>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={toInformation} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Body1>Product Information</Body1>
                    <RightChevron />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Reviews')} style={{ flexDirection: 'row', marginVertical: SIZE * 5, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Body1>Reviews</Body1>
                    <Body1>32</Body1>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Body1>Questions and answers</Body1>
                    <Body1>5</Body1>
                </View>
            </View>
        </>
    )
}

const productStyle = StyleSheet.create({
    discountContainer: {
        flexDirection: 'row',
        height: SIZE * 8,
        borderRadius: SIZE,
        paddingHorizontal: SIZE * 2,
        alignItems: 'center',
        backgroundColor: COLORS.gray[100],
        marginBottom: SIZE * 4.5
    },
    copyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: SIZE * 4.5,
        backgroundColor: COLORS.yellow[400],
        borderRadius: SIZE / 2,
        width: SIZE * 8.75
    }
})