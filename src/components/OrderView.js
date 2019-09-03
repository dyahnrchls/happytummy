import React, { Component} from 'react'
import { View, Text} from 'react-native'

export default class OrderView extends Component {

    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'blue'}}>
                <View style={{flexDirection: 'row', justifyContent:'space-between', marginHorizontal: 20, marginVertical: 10}}>
                    <Text style={{fontSize: 18}}>Sub Total</Text>
                    <Text style={{fontSize: 18}}>80000</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10 }}>
                    <Text style={{ fontSize: 18 }}>Sub Total</Text>
                    <Text style={{ fontSize: 18 }}>80000</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10 }}>
                    <Text style={{ fontSize: 18 }}>Sub Total</Text>
                    <Text style={{ fontSize: 18 }}>80000</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10 }}>
                    <Text style={{ fontSize: 18 }}>Sub Total</Text>
                    <Text style={{ fontSize: 18 }}>80000</Text>
                </View>
            </View>
        )
    }
}