import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Layout } from '../../components/Elements'
import { FlexCenter } from '../../components/FlexComponents'
import { Body1, Body2 } from '../../components/TextComponents'
import { LeftArrowIcon, LocationIcon } from '../../components/Svgs'
import { SIZE, COLORS } from '../../constants.json'
import PrimaryButton from '../../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

const AddressBook = () => {
    const navigation = useNavigation()
    const goBack = () => navigation.goBack()
    return (
        <Layout>
            <FlexCenter style={style.header}>
                <TouchableOpacity style={style.backButton} onPress={goBack}>
                    <LeftArrowIcon />
                </TouchableOpacity>
                <Body1>Address Book</Body1>
            </FlexCenter>
            <View style={style.addressContainer}>
                <LocationIcon />
                <View style={style.locationDetails}>
                    <Body1 style={style.title}>London, 221B Baker Street</Body1>
                    <Body2 style={style.subtitle}>Hanna Gouse, +7 932 123-43-23</Body2>
                </View>
            </View>
            <PrimaryButton text="Add new address" style={style.button} />
        </Layout>
    )
}

export default AddressBook

const style = StyleSheet.create({
    backButton: {
        position: 'absolute',
        left: 0
    },
    header: {
        position: 'relative'
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SIZE * 2.25,
        marginTop: SIZE * 4
    },
    locationDetails: {
        marginLeft: SIZE * 2.25
    },
    title: {
        fontWeight: 400
    },
    subtitle: {
        fontWeight: 400,
        color: COLORS.gray[500]
    },
    button: {
        backgroundColor: COLORS.gray[100],
        marginTop: SIZE * 4
    }
})