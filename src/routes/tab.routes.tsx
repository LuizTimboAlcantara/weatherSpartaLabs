import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "../modules";
import { Home, Search } from "../scenes";

import Colors from "../utils/theme/colors";

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: Colors.heading,
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <AppTab.Screen
        name="Favoritas"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}
      />

      <AppTab.Screen
        name="Pesquisar"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
