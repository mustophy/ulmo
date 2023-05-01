import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { SIZE, COLORS } from '../../constants.json'
import { Body1, Body2, Body3, Heading2 } from '../../components/TextComponents'
import { FlexBetween } from '../../components/FlexComponents'
import { CarIcon, CartIcon2, RightChevron, LocationIcon, LeftArrowIcon } from '../../components/Svgs'
import { CheckboxCircle } from '../../components/Elements'
import PrimaryButton from '../../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

const DeliveryDetails = () => {
    const navigation = useNavigation()
    const goBack = () => navigation.goBack()
    const toDelivery = () => navigation.navigate('Delivery Address')
    const toPaymentMethod = () => navigation.navigate('Payment Method')
    const [method, setMethod] = useState('')
    const [selectedDay, setSelectedDay] = useState('')
    const [selectedTime, setSelectedTime] = useState('')
    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <TouchableOpacity onPress={goBack} style={{ position: 'absolute', left: 0 }}>
                    <LeftArrowIcon />
                </TouchableOpacity>
                <Body1>Checkout</Body1>
                <Body3 style={{ color: COLORS.gray[500] }}>2 of 3</Body3>
            </View>
            <Heading2>delivery method</Heading2>
            <View style={style.methodList}>
                <TouchableOpacity onPress={() => setMethod('courier')} style={style.row}>
                    <CarIcon />
                    <View style={style.rowDetails}>
                        <Body1 style={style.title}>By courier</Body1>
                        <Body2 style={style.subtitle}>Tomorrow, any time</Body2>
                    </View>
                    <CheckboxCircle isChecked={method === 'courier'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMethod('myself')} style={style.row}>
                    <CartIcon2 />
                    <View style={style.rowDetails}>
                        <Body1 style={style.title}>I'll take it myself</Body1>
                        <Body2 style={style.subtitle}>Any day from tomorrow</Body2>
                    </View>
                    <CheckboxCircle isChecked={method === 'myself'} />
                </TouchableOpacity>
            </View>
            <Heading2>delivery adddress</Heading2>
            <TouchableOpacity onPress={toDelivery} style={[style.row, style.locationBox]}>
                <LocationIcon />
                <View style={style.locationDetails}>
                    <Body1 style={style.locationTitle}>London, 221B Baker Street</Body1>
                    <Body2 style={style.locationSubtitle}>Hanna Gouse, +7 932 123-43-23</Body2>
                </View>
                <RightChevron />
            </TouchableOpacity>
            <Heading2>delivery time</Heading2>
            <View style={style.methodList}>
                <View style={{ height: SIZE * 5 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={style.pillsContainer}>
                            {days.map(day => (
                                <Pill key={day} setSelected={setSelectedDay} isSelected={selectedDay === day}>{day}</Pill>
                            ))}
                        </View>
                    </ScrollView>
                </View>
                <View style={{ height: SIZE * 5 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={style.pillsContainer}>
                            {times.map(time => (
                                <Pill key={time} setSelected={setSelectedTime} isSelected={selectedTime === time}>{time}</Pill>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
            <PrimaryButton onPress={toPaymentMethod} text="Continue" style={style.button}/>
        </View>
    )
}

export default DeliveryDetails


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZE * 8,
        paddingHorizontal: SIZE * 2
    },
    headerContainer: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SIZE * 3
    },
    methodList: {
        marginTop: SIZE * 4,
        gap: SIZE * 2.25,
        marginBottom: SIZE * 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowDetails: {
        marginLeft: SIZE * 2.25,
        marginRight: 'auto'
    },
    title: {
        fontWeight: 400
    },
    subtitle: {
        fontWeight: 400,
        color: COLORS.gray[500]
    },
    locationBox: {
        marginTop: SIZE * 4,
        marginBottom: SIZE * 5
    },
    locationDetails: {
        marginLeft: SIZE * 2,
        marginRight: 'auto'
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
    },
    pillsContainer: {
        flexDirection: 'row',
        gap: SIZE * 1.5,
        // height: SIZE * 5
    },
    button: {
        marginTop: 'auto',
        marginBottom: SIZE * 7
    }
})

const Pill = ({ children, isSelected, setSelected }) => (
    <TouchableOpacity 
        onPress={() => setSelected(children)} 
        style={[
            pillStyle.container, 
            { 
                backgroundColor: isSelected ? COLORS.gray[100] : COLORS.white,
                borderWidth: isSelected ? 0 : 1
            }
        ]}
    >
        <Body2>{children}</Body2>
    </TouchableOpacity>
)

const pillStyle = StyleSheet.create({
    container: {
        height: SIZE * 4.5,
        borderRadius: SIZE,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.gray[300],
        paddingHorizontal: SIZE * 2
    }
})

const days = [
    "Today",
    "Tomorrow",
    "May 1",
    "May 2",
    "May 3",
    "May 4",
]

const times = [
    "12:00 pm",
    "2:00 pm",
    "4:00 pm",
    "6:00 pm",
    "8:00 pm",
    "10:00 pm",
]