import * as WebBrowser from 'expo-web-browser';
import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { AnimatedRegion } from 'react-native-maps';
import * as Location from 'expo-location';

const region = {
  latitude: 32.8035804,
  longitude: -117.2368829,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

// TODO: https://docs.expo.io/versions/latest/sdk/map-view/#configuring-for-web
export default function MapComponent() {

  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text: string | null = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
    console.log('error:', errorMsg)
  } else if (location) {
    text = JSON.stringify(location);
    console.log('success:', text)
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={region} //TODO get this from the location
       style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
