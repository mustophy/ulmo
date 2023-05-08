import { StyleSheet, TouchableOpacity, View } from "react-native"
import { ImageGetter } from "../Utils"
import { Body1, Body2, Body3 } from "./TextComponents"
import { HeartIcon, HeartIcon2 } from "./Svgs"
import { COLORS, SIZE } from "../constants.json"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import favoritesAtom, { addToFavorites } from "../atoms/favoritesAtom"
import { useRecoilState } from "recoil"
import { removeFromFavorites } from "../atoms/favoritesAtom"

const ProductCard = ({ product }) => {
    console.log('meelle', product)
    const navigation = useNavigation()
    const [isLiked, setIsLiked] = useState(false)
    const [favorites, setFavorites] = useRecoilState(favoritesAtom)
    const toggleLike = ( ) => {
        if(isLiked){
            removeFromFavorites(favorites, product, setFavorites)
        } else {
            addToFavorites(favorites, product, setFavorites)
        }
        setIsLiked(!isLiked)
    }
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Product", { product })}>
                <ImageGetter
                    imageName={product.images[0]}
                    style={style.productImage}
                />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: SIZE }}>
                <Body1 style={style.price}>${product.price}</Body1>
                <TouchableOpacity onPress={toggleLike}>
                   <HeartIcon2 isActive={isLiked}/>
                </TouchableOpacity>
            </View>
            <Body3 style={style.productDetails}>{product.description}</Body3>

            {/* <View>
                <Body2></Body2>
            </View> */}
        </View>
    )
}

export default ProductCard

const style = StyleSheet.create({
    price: {
        color: COLORS.black,
        fontWeight: 500
    },
    container: {
        marginTop: SIZE,
        marginBottom: SIZE / 2,
        justifyContent: 'space-between'
    },
    productImage: {
        width: '100%',
        height: SIZE * 25,
        borderRadius: SIZE
    },
    productDetails: {
        color: COLORS.gray[500]
    }
})