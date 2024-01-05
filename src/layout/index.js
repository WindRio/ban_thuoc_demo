import { useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Easing } from "react-native"

import CartScreen from "../view/cart-view/index";
import { CustomeDrawer } from "./side-bar-component";
import ProductScreen from "../view/product-view/index";
import WarehouseScreen from "../view/warehouse-view/index";
import ListOrderScreen from "../view/list-order-view/index";
import DetailOrderScreen from "../view/detail-order-view/index";
import ImportWareHouseScreen from "../view/import-ware-house-view/index";
import CreateProductScreen from "../view/create-product-view";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear
  }
};

const handleTakeToken = () => {
  const useToken = useSelector((state) => state.auth.token);
  return {
    useToken,
  };
};

const ProductNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "none",
      }}
    >
      <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false, unmountOnBlur: true }} />
      <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false, unmountOnBlur: true }} />
    </Stack.Navigator>
  )
}

const WareHouseNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "none",
      }}
    >
      <Stack.Screen name="ImportWareHouseScreen" component={ImportWareHouseScreen} options={{ headerShown: false, unmountOnBlur: true }} />
      <Stack.Screen name="CreateProduct" component={CreateProductScreen} options={{ headerShown: false, unmountOnBlur: true }} />
    </Stack.Navigator>
  )
}

const ListOrderNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "none",
      }}
    >
      <Stack.Screen name="ListOrderScreen" component={ListOrderScreen} options={{ headerShown: false, unmountOnBlur: true }} />
      <Stack.Screen name="DetailOrder" component={DetailOrderScreen} options={{ headerShown: false, unmountOnBlur: true }} />
    </Stack.Navigator>
  )
}

export default function Layout() {
  const role = handleTakeToken();
  return (
    <Drawer.Navigator
      initialRouteName={
        role.useToken.role === "admin" || role.useToken.role === "sale"
          ? "Product"
          : "Warehouse"
      }
      screenOptions={{ drawerType: "front"}}
      drawerContent={(props) => <CustomeDrawer {...props} />}
    >
      <Drawer.Screen name="Product" component={ProductNavigation} options={{ headerShown: false, unmountOnBlur: true }} />
      <Drawer.Screen name="ImportWareHouse" component={WareHouseNavigation} options={{ headerShown: false, unmountOnBlur: true }} />
      <Drawer.Screen name="ListOrder" component={ListOrderNavigation} options={{ headerShown: false, unmountOnBlur: true }} />
      <Drawer.Screen name="Warehouse" component={WarehouseScreen} options={{ headerShown: false, unmountOnBlur: true }} />
    </Drawer.Navigator>
  );
}
