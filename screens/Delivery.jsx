import { View, Text, StyleSheet } from 'react-native'
import { Body1, Body2, Heading1 } from '../components/TextComponents'
import PrimaryButton from '../components/PrimaryButton'
import { COLORS, SIZE } from '../constants.json'
import { LocationIcon } from '../components/Svgs'
import { CheckboxCircle } from '../components/Elements'

const Delivery = () => {
  return (
    <View style={style.container}>
        <Heading1>delivery address</Heading1>
        <View style={style.locationsBox}>
            {deliveryOptions.map(option => (
                <View>
                    <LocationIcon />
                    <View style={style.locationDetails}>
                        <Body1 style={style.locationTitle}>{option.title}</Body1>
                        <Body2 style={style.locationSubtitle}>{option.subtitle}</Body2>
                    </View>
                    <CheckboxCircle />
                </View>
            ))}
        </View>
        <PrimaryButton style={style.button} text="Cancel"/>
        
    </View>
  )
}

export default Delivery

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

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: SIZE * 3
    },
    locationDetails: {
        marginLeft: SIZE * 2,
        marginRight: 'auto'
    },
    button: {
        backgroundColor: COLORS.gray[100]
    },
    locationsBox: {
        gap: SIZE * 2.25,
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