import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { SIZE, COLORS } from '../constants.json'
import { Body1, Body2, Body3, Heading1, Heading2 } from '../components/TextComponents'
import { FlexBetween } from '../components/FlexComponents'
import PrimaryButton from '../components/PrimaryButton'
import { ImageGetter } from '../Utils'
import { CloseCircularIcon, MinusIcon, PlusIcon } from '../components/Svgs'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Bag = () => {
    const navigation = useNavigation()
    const toCheckout = () => navigation.navigate('Checkout')

    return (
        <View style={style.container}>
            <ScrollView>
                <View style={{ paddingHorizontal: SIZE * 2 }}>
                    <Heading1>bag</Heading1>
                    <View style={style.itemList}>
                        {products.map(product => (
                            <BagItem key={product.imageName} item={product} />
                        ))}
                    </View>
                    <Heading2>promocode</Heading2>
                    <FlexBetween style={style.promoBox}>
                        <Body1>ULMO</Body1>
                        <CloseCircularIcon />
                    </FlexBetween>
                    <FlexBetween>
                        <Heading2>total</Heading2>
                        <Heading2>$420.00</Heading2>
                    </FlexBetween>
                    <FlexBetween>
                        <Body1 style={style.promo}>Promocode</Body1>
                        <Body1 style={style.promo}>-$25.00</Body1>
                    </FlexBetween>
                    <PrimaryButton onPress={toCheckout} style={style.button} text="Checkout" />
                </View>
            </ScrollView>
        </View>
    )
}

export default Bag

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 12.5 * SIZE,
    },
    itemList: {
        marginVertical: SIZE * 4,
        gap: SIZE * 3
    },
    button: {
        marginTop: SIZE * 4
    },
    promo: {
        fontWeight: 400,
        color: COLORS.gray[500]
    },
    promoBox: {
        backgroundColor: COLORS.gray[100],
        height: SIZE * 8,
        borderRadius: SIZE,
        paddingHorizontal: SIZE * 2,
        marginTop: SIZE * 3,
        marginBottom: SIZE * 4
    }
})

const BagItem = ({ item }) => {
    const [count, setCount] = useState(1)
    const increaseCount = () => setCount(prev => prev + 1)
    const decreaseCount = () => setCount(prev => prev - 1)
    return (
        <View style={bagItemStyle.container}>
            <ImageGetter
                imageName={item.imageName}
                style={bagItemStyle.image}
            />
            <View style={{ flex: 1 }}>
                <Body1>${item.price}</Body1>
                <Body3 style={bagItemStyle.desc}>{item.description}</Body3>
                <FlexBetween style={bagItemStyle.controls}>
                    <TouchableOpacity onPress={decreaseCount}>
                        <MinusIcon />
                    </TouchableOpacity>
                    <Body1>{count}</Body1>
                    <TouchableOpacity onPress={increaseCount}>
                        <PlusIcon />
                    </TouchableOpacity>
                </FlexBetween>
            </View>
            <TouchableOpacity style={{ marginLeft: SIZE }}>
                <CloseCircularIcon />
            </TouchableOpacity>
        </View>
    )
}

const bagItemStyle = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        marginRight: SIZE * 2,
        width: 94,
        height: 115,
        borderRadius: SIZE
    },
    desc: {
        color: COLORS.gray[500],
        marginTop: SIZE / 2
    },
    controls: {
        marginTop: 'auto',
        backgroundColor: COLORS.gray[100],
        borderRadius: SIZE,
        height: SIZE * 4.5,
        width: SIZE * 12.25,
        paddingHorizontal: SIZE
    }
})

const products = [
    {
        price: '285.00',
        description: 'Square bedside table with legs, a rattan shelf and a...',
        imageName: 'kitchen'
    },
    {
        price: '285.00',
        description: 'Square bedside table with legs, a rattan shelf and a...',
        imageName: 'bedroom'
    },
]