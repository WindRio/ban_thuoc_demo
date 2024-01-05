import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, View } from "@gluestack-ui/themed";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { Provider } from "react-redux";

import { store } from "./src/configStore";
import { useLocalStorage } from "./src/hook/index";
import {
    adminCartData,
    listCustomerData,
    listImageProductData,
    listOrderData,
    listProductData,
    saleCartData
} from "./src/mockup/index";
import Navigation from "./src/navigation/index";

// Giữ màn hình chờ vào app khi đẩy dữ liệu ne !
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const {setData} = useLocalStorage();
  useEffect(() => {
    async function prepare() {
      try {
        // Thực hiện đẩy dữ liệu lên store
        await setData(adminCartData.key, adminCartData.adminCart);
        await setData(listCustomerData.key, listCustomerData.listCustomer);
        await setData(listOrderData.key, listOrderData.listOrder);
        await setData(listProductData.key, listProductData.listProduct);
        await setData(saleCartData.key, saleCartData.saleCart);
        await setData(listImageProductData.key, listImageProductData.listImageProduct);

        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("da  update du lieu len local");
      } catch (error) {
        console.log(error, "loi update du lieu");
      } finally {
        // Yêu cầu ứng dụng hiển thị nhé
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Tắt màn hình chờ vào app
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <View onLayout={onLayoutRootView}></View>
        <Navigation/>
      </GluestackUIProvider>
    </Provider>
  );
}
