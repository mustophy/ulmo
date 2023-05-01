import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SIZE, COLORS } from '../../constants.json'
import { InputText } from '../../components/Elements'
import PrimaryButton from '../../components/PrimaryButton'
import { Body1, Body3, Heading2 } from '../../components/TextComponents'
import { LeftArrowIcon } from '../../components/Svgs'
import { useNavigation } from '@react-navigation/native'

const ContactInfo = () => {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const nextPage = () => navigation.navigate('Delivery Details')
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <TouchableOpacity onPress={goBack} style={{ position: 'absolute', left: 0 }}>
          <LeftArrowIcon />
        </TouchableOpacity>
        <Body1>Checkout</Body1>
        <Body3 style={{ color: COLORS.gray[500] }}>1 of 3</Body3>
      </View>
      <Heading2>contact info</Heading2>
      <View style={style.inputContainer}>
        <InputText label='Full name' />
        <InputText label='Phone' />
        <InputText label='Email' />
      </View>
      <PrimaryButton onPress={nextPage} text="Continue" style={style.button} />
    </View>
  )
}

export default ContactInfo

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
  button: {
    marginTop: 'auto',
    marginBottom: SIZE * 5
  },
  inputContainer: {
    gap: SIZE * 2,
    marginTop: SIZE * 3
  },
  detailList: {
    gap: SIZE * 2
  }
})