import { View, Text, TouchableOpacity } from 'react-native'
import SearchInput from '../components/SearchInput'
import { LeftArrowIcon } from '../components/Svgs'
import { Body1 } from '../components/TextComponents'
import { SIZE } from '../constants.json'
import ReviewRow from '../components/ReviewRow'
import { useNavigation } from '@react-navigation/native'

const Reviews = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 70, paddingHorizontal: 18 }}>
            <View style={{ flexDirection: 'row', marginBottom: SIZE * 3, position: 'relative', justifyContent: 'space-between', alignItems: 'center' }}>
                <LeftArrowIcon />
                <Body1 style={{ position: 'absolute', textAlign: 'center', width: '100%' }}>Reviews</Body1>
                <TouchableOpacity onPress={() => navigation.navigate('NewReview')}>
                    <Body1>New review</Body1>
                </TouchableOpacity>
            </View>
            <SearchInput style={{ marginBottom: SIZE * 4 }} />
            <View style={{ gap: SIZE * 4.5 }}>
                {Array(3).fill('').map((_) => (
                    <ReviewRow />
                ))}
            </View>
        </View>
    )
}

export default Reviews