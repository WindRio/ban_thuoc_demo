import debounce from "lodash/debounce";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React, {useState, useCallback, useEffect, useRef} from "react";
import {Feather, AntDesign} from "@expo/vector-icons";
import {
  HStack,
  Box,
  Input,
  InputField,
  InputSlot,
  Text,
} from "@gluestack-ui/themed";

import {styles} from "./styles";
import {timeout} from "../../utils/constants";

export default function HeaderSearchCommon(props) {
  const {navigation} = props;
  const [textSearch, setTextSearch] = useState("");
  const refInput = useRef('')

  const onOpenDrawer = () => navigation.openDrawer();
  const onSearch = (keyword) => {
    setTextSearch(keyword);
  };

  const debouncedHandleSearch = useCallback(
    debounce(onSearch, timeout),
    []
  );

  const onClearTextSearch = () => {
    setTextSearch("")
    refInput.current.clear()
  }
  useEffect(() => {
    props.onGetTextSearch(textSearch);
    setTextSearch(textSearch)
  }, [textSearch]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text
          style={{display: Platform.OS === "android" ? "flex" : "none"}}
        ></Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Box>
            <HStack alignItems="center" space="sm">
              <Feather
                name="menu"
                size={35}
                color="white"
                onPress={() => onOpenDrawer()}
              />
              <Input
                style={styles.input}
                variant="outline"
                size="sm"
                borderRadius={"$2xl"}
              >
                <InputField
                  ref={refInput}
                  placeholder="Tìm kiếm"
                  color="white"
                  onChangeText={(val) => debouncedHandleSearch(val)}
                />
                <InputSlot display={textSearch ? "flex" : "none"} onPress={onClearTextSearch}
                           style={{marginRight: 12}}>
                  <AntDesign name="close" size={15} color="gray"/>
                </InputSlot>
                <InputSlot>
                  <AntDesign name="search1" size={18} color="white"/>
                </InputSlot>
              </Input>
            </HStack>
          </Box>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
}
