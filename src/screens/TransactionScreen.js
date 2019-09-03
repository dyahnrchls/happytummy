import React, { Component } from 'react'
import { View, Text } from 'react-native'

import OrderButton from '../components/OrderButton'

export default class OrderView extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#dfe6e9' }}>
                <View style={{backgroundColor:'white', marginVertical: 20, marginHorizontal: 20, height: 300, borderRadius: 5}}>
                    <View style={{alignItems: 'center', height: 50}}>
                        <Text style={{paddingTop: 10, fontSize:15, fontWeight:'bold'}}>3 September 2019</Text>
                    </View>
                    <View style={{marginHorizontal: 20, borderBottomWidth: 1, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, marginBottom: 50}}>
                        <Text style={{fontSize:15, fontWeight:'bold'}}>Waiting</Text>
                        <Text>Choco Lava</Text>
                        <Text>40000</Text>
                    </View>
                    <View style={{ flexDirection: 'row-reverse' }}>
                        <Text style={{ paddingVertical: 5, paddingRight: 20 }}>40000</Text>
                        <Text style={{ paddingVertical: 5, paddingRight: 60 }}>Sub Total</Text>
                    </View>
                    <View style={{ flexDirection: 'row-reverse' }}>
                        <Text style={{ paddingVertical: 5, paddingRight: 20 }}>0</Text>
                        <Text style={{ paddingVertical: 5, paddingRight: 90 }}>Discount</Text>
                    </View>
                    <View style={{ flexDirection: 'row-reverse' }}>
                        <Text style={{ paddingVertical: 5, paddingRight: 20 }}>2000</Text>
                        <Text style={{ paddingVertical: 5, paddingRight: 60 }}>Service Charge (5%)</Text>
                    </View>
                    <View style={{ flexDirection: 'row-reverse' }}>
                        <Text style={{ paddingVertical: 5, paddingRight: 20 }}>4000</Text>
                        <Text style={{ paddingVertical: 5, paddingRight: 60 }}>Tax (10%)</Text>
                    </View>
                    <View style={{ flexDirection: 'row-reverse' }}>
                        <Text style={{ paddingVertical: 5, paddingRight: 20, fontWeight: 'bold' }}>46000</Text>
                        <Text style={{ paddingVertical: 5, paddingRight: 60, fontWeight:'bold' }}>Total</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: 'bluee', marginVertical: 5, marginHorizontal: 20, height: 200, borderRadius: 5 }}>
                    
                </View>
                <OrderButton text="CALL BILL" button={() => this.props.navigation.navigate('CallBillScreen')}/>
            </View>
        )
    }
}