import { StyleSheet, TouchableOpacity, View } from "react-native"

export const FlexBetween = ({ children, style, isTouchable = false, onPress = {} }) => {
    if (isTouchable) {
        return (
            <TouchableOpacity onPress={onPress} style={[ flexStyle.between, style]}>
                {children}
            </TouchableOpacity>
        )
    }
    else return <View style={[ flexStyle.between, style]}>
        {children}
    </View>
}


export const FlexCenter = ({ children, style, isTouchable = false, onPress = () => {} }) => {
    if (isTouchable) {
        return (
            <TouchableOpacity onPress={onPress} style={[ flexStyle.center, style]}>
                {children}
            </TouchableOpacity>
        )
    }
    return <View style={[ flexStyle.center, style]}>
        {children}
    </View>
}

const flexStyle = StyleSheet.create({
    between: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    center: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})