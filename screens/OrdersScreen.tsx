import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import { Text, View } from '../components/Themed'

export function OrderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders Go Here</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Icon
        raised
        name="cutlery"
        size={35}
        type="font-awesome"
        color="#80CA6E"
        onPress={() => console.log('hello')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
