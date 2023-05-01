import { View, Text, StyleSheet } from 'react-native'
import { COLORS, SIZE } from '../../constants.json'
import { ImageGetter } from '../../Utils'
import { Body1, Heading2 } from '../../components/TextComponents'
import PrimaryButton from '../../components/PrimaryButton'

const OrderSuccess = () => {
  return (
    <View style={style.container}>
        <ImageGetter 
            imageName="order_success"
            style={{}}
        />
        <Heading2 style={style.main}>your order is placed</Heading2>
        <Body1 style={style.content}>thanks for your order, we hope you enjoy shopping with us</Body1>
        <PrimaryButton style={style.button} text="To my orders" textStyle={style.buttonText}/>
    </View>
  )
}

export default OrderSuccess

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: SIZE * 2,
        backgroundColor: COLORS.yellow[300],
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    main: {
        marginTop: SIZE * 2,
        marginBottom: SIZE / 2
    },
    content: {
        fontWeight: 400,
        textAlign: 'center',
        paddingHorizontal: SIZE * 2
    },
    button: {
        position: 'absolute',
        bottom: SIZE * 5,
        borderWidth: SIZE / 4,
        backgroundColor: COLORS.yellow[300]
    },
})