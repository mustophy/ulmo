import { StyleSheet, View } from "react-native"
import { SIZE, COLORS } from "../constants.json"
import { Heading2 } from "./TextComponents"
import { ImageGetter } from "../Utils"

const LocationCard = ({ location }) => {
  return (
    <View style={style.container}>
      <View style={{ paddingTop: 2 * SIZE}}>
        <Heading2>{location.name}</Heading2>
      </View>
      <ImageGetter
        imageName={location.imageName}
        style={{
          height: '100%',
          width: 100,
        }}
      />
    </View>
  )
}

export default LocationCard

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 12.25 * SIZE,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 2 * SIZE,
    overflow: "hidden",
    backgroundColor: COLORS.gray[100],
    borderRadius: SIZE
  },
})