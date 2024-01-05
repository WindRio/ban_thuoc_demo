import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLocalStorage = () => {
  const setData = async (key, value) => {
    try {
      const covertStringIFy = JSON.stringify(value);
      await AsyncStorage.setItem(key, covertStringIFy);
    } catch (error) {
      console.log("Update du lieu khong thanh cong:", error);
    }
  };

  const setItemData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log("Update du lieu khong thanh cong:", error);
    }
  };

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log("Update du lieu khong thanh cong", error);
    }
  };
  const getItemData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (!value) {
        throw new Error("Du lieu dang rong");
      }
      return value;
    } catch (error) {
      console.log("Update du lieu khong thanh cong", error);
    }
  };
  return {
    setItemData,
    getItemData,
    setData,
    getData,
  };
};
