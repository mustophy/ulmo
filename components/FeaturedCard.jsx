import { StyleSheet } from "react-native"
import { View } from "react-native"
import { SIZE } from "../constants.json"
import { ImageGetter } from "../Utils"
import { Body3 } from "./TextComponents"

const FeaturedCard = ({ featured }) => {
  return (
    <View style={style.container}>
        <ImageGetter 
            style={style.image}
            imageName={featured.imageName}
        />
        <Body3>{featured.name}</Body3>
    </View>
  )
}

export default FeaturedCard

const style = StyleSheet.create({
    container: {
        height: SIZE * 11,
        width: SIZE * 11,
        position: "relative",
        borderRadius: SIZE,
        overflow: "hidden",
    },
    image: {
        height: '100%',
        width: '100%'
    }
})