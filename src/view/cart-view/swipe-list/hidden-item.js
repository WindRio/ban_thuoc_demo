import { Dimensions } from "react-native";
import React from "react";
import { HStack, Pressable, VStack } from "@gluestack-ui/themed";
import { AntDesign } from "@expo/vector-icons";

export default function HiddenItem({ data, onOpenDeleteProductModal, _rowMap }) {
  return (
    <HStack flex={1} pl={2} justifyContent="flex-end">
      <Pressable
        cursor="pointer"
        onPress={() => {
          onOpenDeleteProductModal(data, _rowMap);
        }}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <VStack
          alignItems="center"
          space={2}
          backgroundColor="red"
          height={"100%"}
          width={Dimensions.get("window").width * 0.3}
          alineItem={"center"}
          justifyContent={"center"}
        >
          <AntDesign name="delete" size={24} color="#fff" />
        </VStack>
      </Pressable>
    </HStack>
  );
}
