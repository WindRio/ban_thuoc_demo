import {
    Avatar,
    AvatarImage,
    Box,
    Button,
    ButtonText,
    HStack,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import { View } from "react-native";

import { buttonText, color } from "../../utils";
import styles from "./styles";

export default function CardUserInfoCommon(props) {
  const { data, isButton, onPressChange } = props;
  const uriImg =
    "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg";

  const onPressButton = () => {
    onPressChange();
  };

  return (
    <View>
      <HStack style={styles.container}>
        <HStack
          style={styles.contentLeft}
          paddingHorizontal={isButton ? "auto" : 10}>
          <Box style={isButton ? { paddingRight: 10 } : {}}>
            <Avatar bgColor={color.white} size="md">
              <AvatarImage
                source={data.avatar ? data.avatar : uriImg}
                alt="Avatar"
              />
            </Avatar>
          </Box>
          {data.id? (
            <VStack paddingLeft={isButton ? "auto" : "5%"} flex={1}>
              <Text bold size="md" color={color.blackName} numberOfLines={1}>
                {data.fullName}
              </Text>
              {data.phoneNumber ? (
                <Text color={color.plumRed} size="sm">
                  {data.phoneNumber}
                </Text>
              ) : (
                <></>
              )}
              {data.address ? (
                <Text size="xs" numberOfLines={1}>
                  {data.address}
                </Text>
              ) : (
                <></>
              )}
            </VStack>
          ) : (
            <Text bold size="md" color={color.blackName}>
              Chọn khách hàng
            </Text>
          )}
        </HStack>
        <Box style={styles.contentRight} display={isButton ? "flex" : "none"}>
          <Button onPress={onPressButton} style={styles.button}>
            <ButtonText>
              {data ? buttonText.BUTTON_CHANGE : buttonText.BUTTON_CHOOSE}
            </ButtonText>
          </Button>
        </Box>
      </HStack>
    </View>
  );
}
