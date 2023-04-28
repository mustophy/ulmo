import { StyleSheet, TextInput, View } from "react-native"
import { SIZE, COLORS } from "../constants.json"
import { SearchIcon } from "./Svgs"

const SearchInput = ({ style }) => {
    return (
        <View style={[style, inputStyle.container]}>
            <View style={{ position: 'absolute', height: '100%', alignItems: 'center', justifyContent: 'center', paddingLeft: 19}}>
                <SearchIcon />
            </View>
            <TextInput
                placeholder="Search"
                style={inputStyle.textInput}
                placeholderTextColor={COLORS.gray[500]}
            />
        </View>
    )
}

export default SearchInput

const inputStyle = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: COLORS.gray[100],
        borderRadius: SIZE,
        height: 8 * SIZE,
        width: '100%'
    },
    textInput: {
        height: '100%',
        paddingLeft: 7 * SIZE,
        width: '100%',
        fontSize: 16,
        lineHeight: 24
    }
})