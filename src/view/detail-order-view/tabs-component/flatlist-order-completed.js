import {
    Box,
    FlatList,
    HStack,
    Image,
    Text,
    VStack,
} from "@gluestack-ui/themed";

import { color, formatMoney } from "../../../utils";
import { styleFlatlist } from "./styles";

export default function FlatlistOrderCompleted(props) {
    const {data} = props;
    
    return (
        <>
            <FlatList
                data={data}
                renderItem={({item}) => {
                    return (
                        <HStack style={styleFlatlist.container}>
                            <Box style={styleFlatlist.boxImg}>
                                <Image
                                    alt="ảnh thuốc"
                                    style={styleFlatlist.img}
                                    source={{
                                        uri: item.avatar,
                                    }}
                                />
                            </Box>
                            <VStack justifyContent="space-between" style={styleFlatlist.contentCard}>
                                <Text size="md" color={color.blackName} numberOfLines={1} >
                                    {item.name}
                                </Text>
                                <HStack justifyContent="space-between" style={{verticalAlign: 'bottom'}}>
                                    <Text color={color.blueSky} size="sm">
                                        {formatMoney(item.priceEdit)}
                                    </Text>
                                    <Text color={color.blueSky} size="sm" style={{verticalAlign: 'bottom',fontWeight: "bold"}}>
                                        x {item.quantity}
                                    </Text>
                                </HStack>
                                <HStack justifyContent="space-between">
                                    <Text color="grey" size="sm" style={{verticalAlign: 'bottom'}}>
                                        {item.unit}
                                    </Text>
                                    <Text color="#CC0000" size="sm" style={{verticalAlign: 'bottom',fontWeight: "bold"}}>
                                        {formatMoney(item.totalProductPrice)}
                                    </Text>
                                </HStack>
                            </VStack>
                        </HStack>
                    );
                }}
            />
        </>
    );
}
;
