import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { CloseIcon } from '../components/Svgs'
import Rating from '../components/Rating'
import { SIZE, COLORS } from '../constants.json'
import { Body1, Body2 } from '../components/TextComponents'
import { useState } from 'react'
import { CameraIcon } from '../components/Svgs'
import { useNavigation } from '@react-navigation/native'

const NewReview = () => {
    const navigation = useNavigation()
    const [rating, setRating] = useState(-1)
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: SIZE * 10, paddingHorizontal: SIZE * 2 }}>
            <View style={{ position: 'relative', flexDirection: 'row' }}>
                <TouchableOpacity style={{ position: 'absolute', top: SIZE / 2, }} onPress={() => navigation.goBack()}>
                    <CloseIcon />
                </TouchableOpacity>
                <Body1 style={{ textAlign: 'center', width: '100%' }}>New Review</Body1>
            </View>
            <View style={{ alignItems: 'center', marginTop: SIZE * 4.5 }}>
                <Rating rating={rating} setRating={setRating} large={true} />
            </View>
            {rating > -1 &&
                <View style={style.messageContainer}>
                    <Body2 style={{ color: COLORS.gray[500], fontWeight: 400 }}>Your review</Body2>
                    <Body1 style={{ fontWeight: 400 }}>{ratings[rating]}</Body1>
                </View>
            }
            <View style={{ marginTop: SIZE * 3, marginBottom: SIZE * 4, gap: SIZE * 3, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: SIZE * 8, height: SIZE * 8, borderRadius: SIZE, backgroundColor: COLORS.gray[100], justifyContent: 'center', alignItems: 'center'}}>
                    <CameraIcon />
                </TouchableOpacity>
                <View style={{ width: SIZE * 8, height: SIZE * 8, backgroundColor: 'purple', borderRadius: SIZE }}>

                </View>
                <View style={{ width: SIZE * 8, height: SIZE * 8, backgroundColor: 'purple', borderRadius: SIZE }}>

                </View>
            </View>
            <TouchableOpacity style={style.button}>
                <Body1>Send Review</Body1>
            </TouchableOpacity>
        </View>
    )
}

export default NewReview

const style = StyleSheet.create({
    messageContainer: {
        paddingLeft: SIZE * 2,
        marginTop: SIZE * 4,
        marginBottom: SIZE * 3,
        justifyContent: 'center',
        borderRadius: SIZE,
        height: SIZE * 8,
        backgroundColor: COLORS.gray[100]
    },
    button: {
        backgroundColor: COLORS.yellow[400],
        height: SIZE * 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZE
    }
})

const ratings = [
    "Bad product!",
    "Poor quality",
    "Good product",
    "Everything is good. Nice quality",
    "Perfect! Amazing product!",
]