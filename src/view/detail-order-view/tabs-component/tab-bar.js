import { Text } from "@gluestack-ui/themed";
import { Animated, ScrollView, TouchableOpacity, View } from "react-native";

import { setColorWithStatus } from "../../../utils";
import { styles } from "./styles";

export default function TabBar({ data, onPressTabs, activeTab, status }) {
  const inputRange = data.navigationState.routes.map((x, i) => i);

  const changeBorder = (val) => {
    if (activeTab === val) {
      return { ...styles.tabSelected, borderBottomColor: setColorWithStatus(status) };
    } else {
      return;
    }
  };

  const changeColor = (val) => {
    if (activeTab === val) {
      return setColorWithStatus(status);
    } else {
      return;
    }
  };

  return (
    <View style={styles.tabBar}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: "#ccc",
        }}
      >
        {data.navigationState.routes.map((route, i) => {
          const opacity = data.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 1 : 0.5)),
          });
          return (
            <TouchableOpacity key={i} style={[styles.tabItem, changeBorder(i)]} onPress={() => onPressTabs({ index: i })}>
              <Animated.Text style={[{ opacity }, { color: changeColor(i) }]}>
                <Text size="md" style={activeTab === i ? { fontWeight: "bold", color: setColorWithStatus(status) } : {}}>
                  {route.title}
                </Text>
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
