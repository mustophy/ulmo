import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { SettingsIcon, BagIcon2, PaymentMethodIcon, SignOutIcon, LocationIcon, UserIcon2 } from '../../components/Svgs'
import { Body1, Heading1 } from '../../components/TextComponents'
import { ImageGetter } from '../../Utils'
import userAtom from '../../atoms/userAtom'
import { SIZE, COLORS } from '../../constants.json'
import { Layout } from '../../components/Elements'
import { Flex } from '../../components/FlexComponents'
import { useNavigation } from '@react-navigation/native'
import { useRecoilState } from 'recoil'


const AccountHome = () => {
    const navigation = useNavigation()
    const [user, setUser] = useRecoilState(userAtom)
    const navigateTo = (route) => navigation.navigate(route)
    return (
        <Layout>
            <TouchableOpacity style={style.setting} onPress={() => navigateTo('Settings')}>
                <SettingsIcon />
            </TouchableOpacity>
            <Heading1>my account</Heading1>
            <Flex style={style.userRow}>
                <ImageGetter
                    style={style.avatar}
                    imageName="user1"
                />
                <View style={style.userDetails}>
                    <Body1>{user.name}</Body1>
                    <Body1 style={style.userNumber}>{user.phone}</Body1>
                </View>
            </Flex>
            <View style={style.contentContainer}>
                {navList.map(nav => (
                    <TouchableOpacity style={style.navRow} onPress={() => navigateTo(nav.name)}>
                        {nav.icon}
                        <Body1 style={style.navName}>{nav.name}</Body1>
                        {nav.number && <Body1 style={{ color: COLORS.gray[500], fontWeight: 400 }}>{nav.number}</Body1>}
                    </TouchableOpacity>
                ))}
            </View>
        </Layout>
    )
}

export default AccountHome

const style = StyleSheet.create({
    setting: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    avatar: {
        height: SIZE * 4.5,
        width: SIZE * 4.5,
        borderRadius: SIZE * 2.25
    },
    userRow: {
        marginTop: SIZE * 4.75,
        alignItems: 'center'
    },
    userDetails: {
        marginLeft: SIZE * 2
    },
    userName: {

    },
    userNumber: {
        color: COLORS.gray[500],
        fontWeight: 400
    },
    contentContainer: {
        gap: SIZE * 5.25,
        marginTop: SIZE * 4
    },
    navRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    navName: {
        fontWeight: 400,
        marginRight: 'auto',
        marginLeft: SIZE * 2
    }
})

const navList = [
    {
        name: 'My orders',
        icon: <BagIcon2 />,
        number: 14
    },
    {
        name: 'My details',
        icon: <UserIcon2 />
    },
    {
        name: 'My address',
        icon: <LocationIcon />
    },
    {
        name: 'Payment methods',
        icon: <PaymentMethodIcon />
    },
    {
        name: 'Sign out',
        icon: <SignOutIcon />
    }
]
