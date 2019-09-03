import React, { Component } from 'react'
import {View, Text, Image} from 'react-native'
import OrderButton from '../components/OrderButton'

export default class CallBillScreen extends Component{

    static navigationOptions = {
        header: null
    }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Image source={require('../assets/images/payment.png')} style={{height: '40%', width: '100%'}}/>
                <Text>
                    PLEASE BRING THE IPAD TO THE CASHIER
                </Text>
                <Text>
                    TO PROCEED WITH THE PAYMENT 
                </Text>
                <Text style={{fontSize:50}}>
                    # 20
                </Text>
                <OrderButton text="BACK TO HOME" button={() => this.props.navigation.navigate('MainScreen')}/>
            </View>
        )
    }
}
