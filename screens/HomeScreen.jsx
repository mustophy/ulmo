import { ScrollView, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Heading1 } from '../components/TextComponents'
import SearchInput from '../components/SearchInput'
import { SIZE } from '../constants.json'
import LocationCard from '../components/LocationCard'
import Navbar from '../components/Navbar'
import FeaturedCard from '../components/FeaturedCard'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={homeStyle.container}>
      <View style={{ paddingHorizontal: SIZE * 2, width: '100%' }}>
        <Heading1 style={homeStyle.headerStyle}> ulmo </Heading1>
        <SearchInput style={homeStyle.searchInputStyle} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginLeft: SIZE * 2 }}>
        <View style={homeStyle.featuredContainer}>
          {featured.map(feature => (
            <FeaturedCard key={feature.name} featured={feature} />
          ))}
        </View>
      </ScrollView>
      <ScrollView style={{ width: '100%', paddingHorizontal: SIZE * 2, marginTop: SIZE * 2 }}>
        <View style={{ gap: 2 * SIZE, paddingBottom: SIZE * 2,  }}>
          {locations.map(location => {
            return (
              <TouchableOpacity key={location.name} onPress={() => navigation.navigate("Categories", { name: location.name})}>
                <LocationCard location={location} key={location.id} />
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
      <Navbar />
    </View>
  )
}

export default Home

const homeStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 12.5 * SIZE,
    alignItems: 'center'
  },
  featuredContainer: {
    flexDirection: 'row',
    marginTop: SIZE * 2,
    gap: SIZE * 3,
    width: '100%'
  },
  headerStyle: {
    marginBottom: 3 * SIZE,
    textAlign: 'center'
  },
  searchInputStyle: {
    marginBottom: 2 * SIZE
  }
})

const locations = [
  {
    id: 1,
    name: 'bedroom',
    imageName: 'bedroom'
  },
  {
    id: 2,
    name: 'living room',
    imageName: 'livingroom'
  },
  {
    id: 3,
    name: 'kitchen',
    imageName: 'kitchen'
  },
  {
    id: 4,
    name: 'dining',
    imageName: 'dining'
  },
  {
    id: 5,
    name: 'bathroom',
    imageName: 'bathroom'
  },
]

const featured = [
  {
    name: 'best of 2020',
    imageName: 'best'
  },
  {
    name: 'lovely kitchen',
    imageName: 'kitchen2'
  },
  {
    name: 'the golden hour',
    imageName: 'golden'
  },
  {
    name: 'summer choice',
    imageName: 'summer'
  },
]