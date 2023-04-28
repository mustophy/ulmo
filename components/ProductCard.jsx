import { StyleSheet, TouchableOpacity, View } from "react-native"
import { ImageGetter } from "../Utils"
import { Body1, Body2, Body3 } from "./TextComponents"
import { HeartIcon2 } from "./Svgs"
import { COLORS, SIZE } from "../constants.json"
import { useNavigation } from "@react-navigation/native"

const ProductCard = ({ product }) => {
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Product")}>
                <ImageGetter
                    imageName={product.imageName}
                    style={style.productImage}
                />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: SIZE }}>
                <Body1 style={style.price}>${product.price}</Body1>
                <HeartIcon2 />
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