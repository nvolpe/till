import * as React from 'react';
import { StyleSheet, FlatList, ListRenderItemInfo, Image } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Restaurant } from '../models/types'
import {restaurant_test_data} from '../testData/data'

interface RenderItem {
  item: Restaurant
  index: number
}

export default function RestaurantScreen() {
 
  return (
    <View style={styles.container}>
        <View style={styles.item}>
      {/* <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${item.url}` }}
          style={styles.image}
        />
        </View>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.title}>{item.MoreInfo}</Text>
      <Text style={styles.title}>{`Order Anytime, pickup ${item.StartTime}`}</Text> */}
    </View>
    </View>
  );
}

// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab One</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="/screens/TabOneScreen.tsx" />
//     </View>
//   );
// }

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
  item: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'blue'
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    height: 200,
  }
});
