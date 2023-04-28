import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { StarIcon, StarIconLg } from './Svgs'

const Rating = ({ large=false, rating, setRating}) => {
    
    return (
        <View style={style.container}>
            {Array(5).fill('').map((_, index) => (
                <TouchableOpacity style={style.container} onPress={() => setRating(index)}>
                    {large
                        ? <StarIconLg filled={index <= rating}/>
                        : <StarIcon filled={index <= rating}/>
                    }
                </TouchableOpacity>
            ))} 
        </View>
    )
}

export default Rating

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 10
    }
})