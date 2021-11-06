import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Details } from "../scenes";

import AuthRoutes from "./tab.routes";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <stackRoutes.Screen name="Home" component={AuthRoutes} />
    <stackRoutes.Screen name="Search" component={AuthRoutes} />
    <stackRoutes.Screen name="Details" component={Details} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
