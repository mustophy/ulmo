import { TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, SIZE } from "../constants.json"
import { Body1 } from './TextComponents'

const PrimaryButton = ({ text, icon = false, style = {}, textStyle = {}, onPress = () => {}, isDisabled = false}) => {
  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress} style={[buttonStyle.container, style]}>
      <Body1 style={[{ fontWeight: 500}, textStyle]}>{text}</Body1>
      {icon && <>{icon}</>}
    </TouchableOpacity>
  )
}

export default PrimaryButton

const buttonStyle = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        columnGap: SIZE,
        backgroundColor: COLORS.yellow[400],
        height: SIZE * 8,
        borderRadius: SIZE,
        justifyContent: 'center',
        alignItems: 'center'
    }
})