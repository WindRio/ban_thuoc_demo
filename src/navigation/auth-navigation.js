import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Authen from "../view/login-view/index";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Authen"
        component={Authen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}