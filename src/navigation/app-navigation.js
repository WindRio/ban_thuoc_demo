import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Layout from "../layout/index";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Layout"
        component={Layout}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}