/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  Home: undefined
  Map: undefined
  Orders: undefined
}

export type MapStackParams = {
  MapScreen: undefined
}

export type OrderStackParams = {
  OrderScreen: undefined
}

export type RestaurantStackParams = {
  RestaurantListScreen: undefined
  RestaurantScreen: { title: string } | undefined
}
