/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { RestaurantListScreen } from '../screens/RestaurantListScreen'
import { RestaurantScreen } from '../screens/RestaurantScreen'
import { OrderScreen } from '../screens/OrdersScreen'
import { MapScreen } from '../screens/MapScreen'
import {
  BottomTabParamList,
  MapStackParams,
  OrderStackParams,
  RestaurantStackParams,
} from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={RestaurantNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="navigate-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={OrderNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="fast-food-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name']
  color: string
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const RestaurantStack = createStackNavigator<RestaurantStackParams>()

function RestaurantNavigator() {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="RestaurantListScreen"
        component={RestaurantListScreen}
        options={{ headerTitle: 'Till' }}
      />
      <RestaurantStack.Screen
        name="RestaurantScreen"
        component={RestaurantScreen}
        options={({ route }) => ({
          headerTitle: `${route.params?.title ?? 'Restaurant'}`,
        })}
      />
    </RestaurantStack.Navigator>
  )
}

const MapStack = createStackNavigator<MapStackParams>()

function MapNavigator() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerTitle: 'Map screen' }}
      />
    </MapStack.Navigator>
  )
}

const OrderStack = createStackNavigator<OrderStackParams>()

function OrderNavigator() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{ headerTitle: 'Order Screen' }}
      />
    </OrderStack.Navigator>
  )
}
