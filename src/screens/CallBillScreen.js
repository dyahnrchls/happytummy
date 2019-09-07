import React, { Component } from 'react'
import {View, Text, Image} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import OrderButton from '../components/OrderButton'

export default class CallBillScreen extends Component{

    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state = {
            transactionId: 0,
            tableNumber: 0,
        }
    }
    
    getTableNumber = async () => {
        try {
            const tableNum = await AsyncStorage.getItem('TABLE_NUMBER')
            const id = await AsyncStorage.getItem('TRANSACTION_ID')
            
            this.setState({
                tableNumber: tableNum,
                transactionId: id,
            })
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount(){
        this.getTableNumber()
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
                    # {this.state.transactionId}
                </Text>
                <OrderButton text="BACK TO HOME" button={() => this.props.navigation.navigate('MainScreen')}/>
            </View>
        )
    }
}
