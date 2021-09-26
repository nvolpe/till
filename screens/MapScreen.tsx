import * as React from 'react'
import { StyleSheet } from 'react-native'

import MapComponent from '../components/MapComponent'
import { Text, View } from '../components/Themed'
import AnimatedViews from '../components/map/AnimatedViews'
import CarouselView from '../components/map/CarouselView'

// likely have to compose this differently. perhaps put the carousel in the
// map component so event handlers are within the same component heierachy.

//https://github.com/meliorence/react-native-snap-carousel/blob/master/doc/PROPS_METHODS_AND_GETTERS.md#callbacks
export function MapScreen() {
  return (
    <View style={styles.container}>
      <MapComponent />
      <CarouselView></CarouselView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
