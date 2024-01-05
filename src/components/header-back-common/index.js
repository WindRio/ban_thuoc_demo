import { Box, Center, ChevronLeftIcon, HStack, Icon, Text } from "@gluestack-ui/themed";
import { Platform, Pressable, SafeAreaView } from "react-native";

import { buttonText, setColorWithStatus, textConst } from "../../utils";
import styles from "./styles";

export default function HeaderBackCommon(props) {
  const { title, isDeleteAll, onBack, onDeleteAll, status } = props;
  const onPressBack = () => {
    onBack();
  };
  const onPressDeleteAll = () => {
    onDeleteAll();
  };
  return (
    <SafeAreaView>
      <Text display={Platform.OS === "android" ? "flex" : "none"} style={{ paddingTop: Platform.OS === "android" ? 25 : "auto" }}></Text>
      <HStack style={styles.container}>
        <Box style={styles.boxTitle}>
          <Center>
            <Text size="xl" style={status ? { color: setColorWithStatus(status), fontWeight: "bold" } : {}}>
              {title || textConst.CART}
            </Text>
          </Center>
        </Box>
        <Pressable style={styles.boxIconBack} onPress={() => onPressBack()}>
          <Icon size="xl" as={ChevronLeftIcon} />
        </Pressable>
        <Box style={styles.boxIconDelete}>
          {isDeleteAll ? (
            <Pressable onPress={() => onPressDeleteAll()}>
              <Text style={styles.txtDelete}>{buttonText.DELETE_All}</Text>
            </Pressable>
          ) : (
            <></>
          )}
        </Box>
      </HStack>
    </SafeAreaView>
  );
}
