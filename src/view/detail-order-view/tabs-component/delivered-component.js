import React from 'react'
import {View} from 'react-native'

import FlatlistOrderCompleted from './flatlist-order-completed'

export default function DeliveredComponent({data}) {
    return (
        <View>
            <FlatlistOrderCompleted data={data}/>
        </View>
    )
}