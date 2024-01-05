import { useEffect, useMemo, useState } from "react";
import { Dimensions, View } from "react-native";

import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import {
    Box,
    Button,
    ButtonIcon,
    FormControlErrorText,
    HStack, Image,
    Input, InputField,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import { useIsFocused } from "@react-navigation/native";

import { color, formatMoney, formatMoneyStringToNumber, textConst } from "../../../utils";
import { styles } from "./style";

export default function ProductCard(
  {
    data,
    index,
    onUpdateCart,
    validateData,
    isValidateDataCart
  }
) {
  const [productUpdate, setProductUpdate] = useState({
    index: 0, isSalePrice: true, salePrice: 0, quantity: 0,
  });
  const [sumPrice, setSumPrice] = useState(0);
  const [isDefaultData, setIsDefaultData] = useState(true);
  const [isShowValidateSalePrice, setIsShowValidateSalePrice] = useState(false);
  const [isShowValidateMaxQuantity, setIsShowValidateMaxQuantity] = useState(false);
  const [isShowValidateMinQuantity, setIsShowValidateMinQuantity] = useState(false);

  const isFocused = useIsFocused()
  const onPressIsSalePrice = () => {
    setProductUpdate({
      ...productUpdate, isSalePrice: !productUpdate.isSalePrice,
    });
    setIsDefaultData(false);
  };

  const handleCheckEmpty = (value) => {
    if (value === "" || value < 0) {
      return 0;
    } else {
      return value;
    }
  };

  const onChangeInputQuantity = (data) => {
    setProductUpdate({
      ...productUpdate, quantity: parseInt(handleCheckEmpty(data)),
    });
    setIsDefaultData(false);
    setIsShowValidateMaxQuantity(false);
    setIsShowValidateMinQuantity(false);
  };

  const onChangeInputSalePrice = (data) => {
    const newData = formatMoneyStringToNumber(data);
    if (newData === 0) {
      setProductUpdate({
        ...productUpdate, isSalePrice: true, salePrice: parseInt(handleCheckEmpty(newData)),
      });
    } else {
      setProductUpdate({
        ...productUpdate, salePrice: parseInt(handleCheckEmpty(newData)),
      });
    }
    setIsDefaultData(false);
    setIsShowValidateSalePrice(false);
  };

  const onPressUpButton = () => {
    setProductUpdate({
      ...productUpdate, quantity: productUpdate.quantity + 1,
    });
    setIsDefaultData(false);
    setIsShowValidateMaxQuantity(false);
    setIsShowValidateMinQuantity(false);
  };
  const onPressDownButton = () => {
    setProductUpdate({
      ...productUpdate, quantity: productUpdate.quantity - 1,
    });
    setIsDefaultData(false);
    setIsShowValidateMaxQuantity(false);
  };

  useMemo(() => {
    let newSumPrice;
    if (productUpdate.isSalePrice) {
      newSumPrice = (data.floorPrice + productUpdate.salePrice) * productUpdate.quantity;
    } else {
      newSumPrice = (data.floorPrice - productUpdate.salePrice) * productUpdate.quantity;
    }
    setSumPrice(newSumPrice);
    if (!isDefaultData && !data.isChange) {
      onUpdateCart(productUpdate);
    }
  }, [productUpdate]);

  useEffect(() => {
    if (isValidateDataCart) {
      validateData.forEach((item) => {
        if (item.index === index) {
          setIsShowValidateSalePrice(item.isValidateSalePrice)
          setIsShowValidateMaxQuantity(item.isValidateMaxQuantity)
          setIsShowValidateMinQuantity(item.isValidateMinQuantity)
        }
      });
    }
  }, [isValidateDataCart])

  useEffect(() => {
    setProductUpdate({
      index, isSalePrice: data.isSalePrice, salePrice: data.salePrice, quantity: data.quantity,
    });
  }, [isFocused, data]);

  const showValidateSalePrice = useMemo(() => {
    return isShowValidateSalePrice && !data.isChange
  }, [isShowValidateSalePrice]);

  const showValidateMaxQuantity = useMemo(() => {
    return isShowValidateMaxQuantity && !data.isChange
  }, [isShowValidateMaxQuantity]);

  const showValidateMinQuantity = useMemo(() => {
    return isShowValidateMinQuantity && !data.isChange
  }, [isShowValidateMinQuantity]);
  return (<>
    <HStack style={styles.contentCart} justifyContent="space-between">
      <View style={styles.boxImg}>
        <Image
          style={styles.imgProduct}
          alt="Ảnh thuốc"
          source={{ uri: data.avatar }}
        />
      </View>
      <VStack style={styles.inforProduct} justifyContent="center">
        <Text
          style={{ marginBottom: Dimensions.get("window").width * 0.0255 }}
          size="md"
          fontWeight="bold"
          color={color.blackName}
          numberOfLines={1}
        >
          {data.name}
        </Text>
        <VStack>
          <HStack
            style={{ marginBottom: Dimensions.get("window").width * 0.00505 }}
            justifyContent="space-between"
          >
            <VStack>
              <Text color={color.blueSky} size="sm">
                {formatMoney(data.floorPrice)}
              </Text>
              <Text color={color.lightGrayCart} size="xs">
                {data.unit}
              </Text>
            </VStack>
            <VStack justifyContent="space-between">
              <Ionicons name="md-close" size={20} color={color.blueSky} />
            </VStack>
            <Box style={styles.inpQuantity}>
              <Input width="75%" h={32} isDisabled={data.isChange} isInvalid={showValidateMaxQuantity || showValidateMinQuantity}>
                <InputField
                  keyboardType="number-pad"
                  textAlign="center"
                  size=""
                  color={color.blueSky}
                  value={productUpdate.quantity.toString()}
                  onChangeText={onChangeInputQuantity}
                />
              </Input>
            </Box>
            <Button
              style={styles.btnUpdateQuantity}
              size="xs"
              isDisabled={data.isChange}
              onPress={onPressUpButton}
            >
              <ButtonIcon>
                <AntDesign name="caretup" size={13} color={color.blueSky} />
              </ButtonIcon>
            </Button>
          </HStack>
          <HStack justifyContent="space-between" alignItems="center">
            <Button
              isDisabled={data.isChange || formatMoney(productUpdate.salePrice) === "0"}
              onPress={onPressIsSalePrice}
              style={styles.btnSalePrice}
              textAlign="center"
              size="xs"
            >
              <FontAwesome
                size={15}
                name={productUpdate.isSalePrice ? "plus" : "minus"}
                color={productUpdate.isSalePrice ? color.darkGreen : color.plumRed}
              />
            </Button>
            <Input style={styles.inpSalePrice} isDisabled={data.isChange} isInvalid={showValidateSalePrice}>
              <InputField
                keyboardType="number-pad"
                color={productUpdate.isSalePrice ? color.darkGreen : color.plumRed}
                size="sm" lineHeight={17}
                value={formatMoney(productUpdate.salePrice)}
                onChangeText={onChangeInputSalePrice}
              />
            </Input>
            <VStack justifyContent="center">
              <Text textAlign="center" size={"sm"} color={color.plumRed}>
                {formatMoney(sumPrice)}
              </Text>
            </VStack>
            <Button
              style={styles.btnUpdateQuantity}
              size="xs"
              isDisabled={data.isChange || productUpdate.quantity <= 1}
              onPress={onPressDownButton}
            >
              <ButtonIcon>
                <AntDesign
                  name="caretdown"
                  size={13}
                  color={color.blueSky}
                />
              </ButtonIcon>
            </Button>
          </HStack>
        </VStack>
        <FormControlErrorText fontSize={10} display={showValidateMaxQuantity ? 'flex' : 'none'}>
          {textConst.VALIDATE_QUALITY_MAX}
        </FormControlErrorText>
        <FormControlErrorText fontSize={10} display={showValidateMinQuantity ? 'flex' : 'none'}>
          {textConst.VALIDATE_QUALITY_MIN}
        </FormControlErrorText>
        <FormControlErrorText fontSize={10} display={showValidateSalePrice ? 'flex' : 'none'}>
          {textConst.VALIDATE_EDIT_PRICE}
        </FormControlErrorText>
      </VStack>
    </HStack>
  </>);
}
