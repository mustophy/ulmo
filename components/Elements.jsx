import { StyleSheet, View } from "react-native"
import { CheckmarkIcon } from "./Svgs"
import { SIZE, COLORS } from '../constants.json'

export const CheckboxCircle = ({ isChecked = false, setChecked }) => (
    <View style={[checkStyle.container, { backgroundColor: isChecked ? COLORS.yellow[400] : COLORS.gray[100] }]}>
        {isChecked ? <CheckmarkIcon /> : null}
    </View>
)

const checkStyle = StyleSheet.create({
    container: {
        height: SIZE * 3,
        width: SIZE * 3,
        borderRadius: SIZE * 3 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

})