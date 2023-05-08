import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { InputText, Layout } from '../../components/Elements'
import { FlexBetween } from '../../components/FlexComponents'
import { LeftArrowIcon } from '../../components/Svgs'
import { Body1, Body2 } from '../../components/TextComponents'
import { ImageGetter } from '../../Utils'
import { SIZE, COLORS } from '../../constants.json'
import { useNavigation } from '@react-navigation/native'
import { useRecoilState } from 'recoil'
import userAtom from '../../atoms/userAtom'

const MyDetails = () => {
    const navigation = useNavigation()
    const [user, setUser] = useRecoilState(userAtom)
    const goBack = () => navigation.goBack()
    return (
        <Layout>
            <FlexBetween>
                <TouchableOpacity onPress={goBack}>
                    <LeftArrowIcon />
                </TouchableOpacity>
                <Body1>My Details</Body1>
                <Body1>Save</Body1>
            </FlexBetween>
            <View style={style.imageBox}>
                <ImageGetter
                    imageName="user1"
                    style={style.image}
                />

            </View>
            <Body2 style={style.text}>Change photo</Body2>
            <View style={style.inputsContainer}>
                <InputText label='Full name' value={user.name}/>
                <InputText label='Phone' value={user.phone}/>
                <InputText label='Email' value={user.email}/>
                <InputText label='Date of birth' value={user.dob}/>
            </View>
        </Layout>
    )
}

export default MyDetails

const style = StyleSheet.create({
    imageBox: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZE * 4,
        marginBottom: SIZE * 2
    },
    text: {
        fontWeight: 500,
        textAlign: 'center'
    },
    image: {
        height: SIZE * 7,
        width: SIZE * 7,
        borderRadius: SIZE * 7 / 2
    },
    inputsContainer: {
        gap: SIZE * 2,
        marginTop: SIZE * 4
    }
})