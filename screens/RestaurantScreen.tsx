import * as React from 'react'
import { StyleSheet, FlatList, ListRenderItemInfo, Alert } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { Image, Button } from 'react-native-elements'
import { Text, View } from '../components/Themed'
import { Restaurant } from '../models/types'

import {
  createStackNavigator,
  StackNavigationOptions,
  StackScreenProps,
} from '@react-navigation/stack'

import { Avatar } from 'react-native-elements'

import { restaurant_test_data } from '../testData/data'
import { RestaurantStackParams } from '../types'

export const RestaurantScreen = ({
  navigation,
  route,
}: StackScreenProps<RestaurantStackParams, 'RestaurantScreen'>) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Avatar
            rounded
            size="medium"
            title="DB"
            titleStyle={{ color: 'black' }}
            // icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
            overlayContainerStyle={{ backgroundColor: 'white' }}
            activeOpacity={0.7}
          />
        </View>
        <View style={styles.headerText}>
          <Text style={styles.title}>{route?.params?.title}</Text>
          <Text style={styles.title}>{'Donuts & Coffee'}</Text>
          <Text style={styles.title}>{'1:30 - 2:30pm'}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/savefood-8d59c.appspot.com/o/%3CFIRDocumentReference:%200x2816cfe40%3E.png?alt=media&token=ea5a5969-7780-441e-958a-a4ff84e42439',
          }}
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
          transition
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{'Box of Donuts'}</Text>
        <Text style={styles.title}>
          {
            'Choose 6 of any available donuts when you arraive and create your own delicious box'
          }
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Plus 1"
          loading={false}
          titleStyle={{ color: 'black' }}
          buttonStyle={styles.counterButton}
          containerStyle={styles.counterButtonContainer}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button
          title="Buy $12.00"
          loading={false}
          buttonStyle={styles.buyButton}
          containerStyle={styles.buyButtonContainer}
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
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
  headerIcon: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 0,
    // marginHorizontal: 0,
  },
  body: {
    flex: 2,
    backgroundColor: 'pink',
    // alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 0,
    // marginHorizontal: 0,
  },
  imageContainer: {
    flex: 2,
    // width: '100%',
    // height: '100%',
    // alignItems: 'center',
    backgroundColor: 'blue',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    height: 200,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    // alignContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  counterButtonContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  counterButton: {
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    color: 'black',
  },
  buyButtonContainer: {
    marginHorizontal: 10,
    flex: 2,
  },
  buyButton: {
    backgroundColor: '#80CA6E',
    borderRadius: 20,
  },
})
