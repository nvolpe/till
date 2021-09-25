/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */


export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
};

// export type TabOneParamList = {
//   TabOneScreen: undefined;
//   RestaurantScreen: undefined;
// };

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type RestaurantStackParams = {
  RestaurantListScreen: undefined;
  RestaurantScreen: { title: string } | undefined;
};

