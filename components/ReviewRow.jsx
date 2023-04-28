import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { Body1, Body2 } from "./TextComponents"
import { ImageGetter } from "../Utils"
import { COLORS, SIZE } from '../constants.json'
import Rating from "./Rating"

const ReviewRow = ({ review = reviews[0] }) => {
    const [rating, setRating] = useState(-1)
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Rating rating={rating} setRating={setRating}/>
                <Body2 style={{ color: COLORS.gray[400], fontWeight: 400 }}>{review.time}</Body2>
            </View>
            <View style={{ flexDirection: 'row', alignItems: "center", marginTop: SIZE * 2 / 3 }}>
                <ImageGetter
                    imageName={review.avatar}
                    style={{
                        height: SIZE * 3,
                        width: SIZE * 3,
                        borderRadius: SIZE * 1.5,
                        marginRight: SIZE
                    }}
                />
                <Body1>{review.username}</Body1>
            </View>
            <Body1 style={{ color: COLORS.gray[500], marginTop: 2, fontWeight: 400 }}>{review.message}</Body1>
        </View>
    )
}

export default ReviewRow

const style = StyleSheet.create({

})

const reviews = [
    {
        username: 'Erin Mango',
        message: "Everything is good. Nice quality",
        avatar: 'user1',
        time: '2 months ago'
    }
]