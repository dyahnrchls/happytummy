import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import OrderButton from '../components/OrderButton'
import {getOrder} from '../store/actions/order'
import {getTransaction, updateTransaction} from '../store/actions/transaction'
import { connect } from 'react-redux'

class TransactionScreen extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state = {
            transactionData: {
                subTotal: 0,
                discount: 0,
                serviceCharge: 0,
                tax: 0,
                total: 0
            }
        }
    }

    transactionHandler = () => {
        let data = this.state.transactionData
        let total = 0
        this.props.order.item.forEach((item) => {
            total = total + item.price
        })
        let newServiceCharge = total * 0.05
        let newTax = total * 0.1
        let newTotal = total + newServiceCharge + newTax
        this.setState(Object.assign(data,
            {
                subTotal: total,
                serviceCharge: newServiceCharge,
                tax: newTax,
                total: newTotal
            }))
    }

    getOrderByTransactionId = async () => {
        try {
            const id = await AsyncStorage.getItem('TRANSACTION_ID')
            await this.props.dispatch(getOrder(id))
        } catch (e) {
            console.log(e)
        }
        this.transactionHandler()
    }

    goToBillScreen = async () => {
        const id = await AsyncStorage.getItem('TRANSACTION_ID')
        let trans = this.state.transactionData
        const data = {
            subtotal: trans.subTotal,
            discount: trans.discount,
            serviceCharge: trans.serviceCharge,
            tax: trans.tax,
            total: trans.total
        }
        await this.props.dispatch(updateTransaction(data, id))
        await this.props.navigation.navigate('CallBillScreen')
    }
    
    componentDidMount(){
        this.getOrderByTransactionId()
    }

    
    render() {
        console.log(this.props.transaction.item)
        let data = this.state.transactionData
        return (
            <View style={{ flex: 1, backgroundColor: '#dfe6e9' }}>
                <View style={{backgroundColor:'white', marginVertical: 20, marginHorizontal: 20, height: 300, borderRadius: 5}}>
                    <View style={{alignItems: 'center', height: 50}}>
                        <Text style={{paddingTop: 10, fontSize:15, fontWeight:'bold'}}>3 September 2019</Text>
                    </View>
                    <View style={{marginHorizontal: 20,  borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, marginBottom: 50}}>
                    <FlatList
                        style={{ margin: 5 }}
                        data={this.props.order.item}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        renderItem={(item) => 
                        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text style={{fontSize:15, fontWeight:'bold'}}>{item.item.qty} x</Text>
                            <Text >{item.item.menu.name}</Text>
                            <Text >{item.item.price}</Text>
                        </View>
                    }
                    />
                    </View>
                    <View style={{marginTop: 10, backgroundColor:'white'}}>
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <Text style={{ paddingVertical: 5, paddingRight: 20 }}>{data.subTotal}</Text>
                            <Text style={{ paddingVertical: 5, paddingRight: 60 }}>Sub Total</Text>
                        </View>
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <Text style={{ paddingVertical: 5, paddingRight: 20 }}>{data.discount}</Text>
                            <Text style={{ paddingVertical: 5, paddingRight: 90 }}>Discount</Text>
                        </View>
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <Text style={{ paddingVertical: 5, paddingRight: 20 }}>{data.serviceCharge}</Text>
                            <Text style={{ paddingVertical: 5, paddingRight: 60 }}>Service Charge (5%)</Text>
                        </View>
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <Text style={{ paddingVertical: 5, paddingRight: 20 }}>{data.tax}</Text>
                            <Text style={{ paddingVertical: 5, paddingRight: 60 }}>Tax (10%)</Text>
                        </View>
                        <View style={{ flexDirection: 'row-reverse' }}>
                            <Text style={{ paddingVertical: 5, paddingRight: 20, fontWeight: 'bold' }}>{data.total}</Text>
                            <Text style={{ paddingVertical: 5, paddingRight: 60, fontWeight:'bold' }}>Total</Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: 'bluee', marginVertical: 5, marginHorizontal: 20, height: 200, borderRadius: 5 }}>
                    
                </View>
                <OrderButton text="CALL BILL" button={this.goToBillScreen}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        order: state.order,
        transaction: state.transaction
    }
}

export default connect(mapStateToProps)(TransactionScreen)