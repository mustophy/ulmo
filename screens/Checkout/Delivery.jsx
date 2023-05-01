import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Body1, Body2, Heading1 } from '../../components/TextComponents'
import PrimaryButton from '../../components/PrimaryButton'
import { COLORS, SIZE } from '../../constants.json'
import { LocationIcon } from '../../components/Svgs'
import { CheckboxCircle } from '../../components/Elements'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

const Delivery = () => {
    const navigation = useNavigation()
    const goBack = () => navigation.goBack()
    const [selectedAddress, setSelectedAddress] = useState('')
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={goBack} style={{ height: '100%', zIndex: 19, backgroundColor: COLORS.black, opacity: 0.5 }}>

            </TouchableOpacity>
            <View style={style.content}>
                <Heading1>delivery address</Heading1>
                <View style={style.locationsBox}>
                    {deliveryOptions.map(option => (
                        <TouchableOpacity key={option.title} onPress={() => setSelectedAddress(option.title)} style={style.locationContainer}>
                            <LocationIcon />
                            <View style={style.locationDetails}>
                                <Body1 style={style.locationTitle}>{option.title}</Body1>
                                <Body2 style={style.locationSubtitle}>{option.subtitle}</Body2>
                            </View>
                            <CheckboxCircle isChecked={selectedAddress === option.title}/>
                        </TouchableOpacity>
                    ))}
                </View>
                <PrimaryButton onPress={goBack} style={style.button} text="Cancel" />

            </View>
        </View>
    )
}

export default Delivery

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: { 
        backgroundColor: 'white', 
        marginTop: 'auto',
        borderTopLeftRadius: SIZE * 5, 
        borderTopRightRadius: SIZE * 5, 
        zIndex: 20,
        paddingTop: SIZE * 7,
        paddingHorizontal: SIZE * 2.25
    },
    header: {
        marginBottom: SIZE * 3
    },
    locationDetails: {
        marginLeft: SIZE * 2,
        marginRight: 'auto'
    },
    button: {
        backgroundColor: COLORS.gray[100],
        marginBottom: SIZE * 7,
        marginTop: SIZE * 3
    },
    locationsBox: {
        gap: SIZE * 2.25,
        marginTop: SIZE * 3
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    locationTitle: {
        fontWeight: 400
    },
    locationSubtitle: {
        fontWeight: 400,
        color: COLORS.gray[500]
    }

})

const deliveryOptions = [
    {
        title: 'London, 221B Baker Street',
        subtitle: 'Hanna Gouse, + 7 932 123-43-23'
    },
    {
        title: 'Moscow, Udaltsova 65a',
        subtitle: 'Jane Smith, + 7 912 143-03-23'
    }
]
