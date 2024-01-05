import { View } from 'react-native'
import { Text } from '@gluestack-ui/themed'

import { textConst } from '../../../utils'

export default function EmptyComponent() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{textConst.NO_DATA}</Text>
        </View>
    )
}