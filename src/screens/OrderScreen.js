import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, FlatList, Alert} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import ConfirmButton from '../components/ConfirmButton'

import { connect } from 'react-redux'
import {updateOrder, postOrder} from '../store/actions/order'
import {convertIDR} from '../utils/helper.js'

class OrderScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state = {
            transactionId: 0
        }
    }

    getTransactionId = async () => {
        try{
            const id = await AsyncStorage.getItem('TRANSACTION_ID')
            console.log(id)
            this.setState({
                transactionId: id
            })
        }catch(e){
            console.log(e)
        }
    }

    componentDidMount(){
        this.getTransactionId()
    }

    incrementHandler = async (id) => {
        let order = this.props.order.item
        const index = order.findIndex(item => item.id === id)
        
        let orderData = order[index]
        let incQty = orderData.qty + 1

        if(orderData.qty > 1){
            let total = orderData.price * incQty
            let incOrder = {
                ...orderData,
                qty: incQty,
                totalPrice: total
            }
            order[index] = incOrder
            await this.props.dispatch(updateOrder(order))
        }else{
            let incOrder = {
                ...orderData,
                qty: incQty,
                totalPrice: orderData.price
            }
            order[index] = incOrder
            await this.props.dispatch(updateOrder(order))
        }
    }

    decrementHandler = async (id) => {
        let order = this.props.order.item
        const index = order.findIndex(item => item.id === id)

        let orderData = order[index]
        let decQty = orderData.qty - 1
        
        if(orderData.qty > 1){
            let total = orderData.price * decQty
            let decOrder = {
                ...orderData,
                qty: decQty,
                totalPrice: total
            }
            order[index] = decOrder
            await this.props.dispatch(updateOrder(order))
        }else{
            order.splice(index, 1)
            await this.props.dispatch(updateOrder(order))
        }
    }

    transactionHandler = () => {
        this.props.order.item.map((item) => {
            let data = {
                menuId: item.id,
                transactionId: parseInt(this.state.transactionId),
                qty: item.qty,
                price: item.totalPrice,
                status: item.status
            }
            console.log(data)
            this.props.dispatch(postOrder(data))
        })
        this.props.navigation.navigate('TransactionScreen')
    }

    confirmHandler = () => {
        Alert.alert(
            'Confirm orders',
            'confirm??',
            [
                {text:'Cancel', style: 'cancel'},
                {text:'Ok', onPress: () => this.transactionHandler()}
            ],
            {cancelable: true}
        )
    }


    render(){
        return(
            <View style={{ backgroundColor: '#fff1e1' , flex:1}}>
                <View style={{marginBottom: 10, height: '105%'}}>
                <Text style={{ paddingLeft: 20, paddingTop: 20, fontSize: 25, fontWeight: 'bold' }}>My Order {this.state.clicked}</Text>   
                <FlatList style={{ margin: 5 }}
                    data={this.props.order.item}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(item) => 
                <View style={{ borderRadius: 5, marginHorizontal: 10, marginTop: 20, padding: 10, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', height: 80, elevation: 8}}>
                    <View style={{flexDirection:'row'}}>
                            <Image source={{ uri: item.item.photoUrl }} style={{width:70, height:'100%'}} />
                        <View style={{marginLeft:10}}>
                            <View>
                                <Text style={{ fontSize: 18 }}>{item.item.name}</Text>
                            </View>
                            <View style={{marginVertical:10}}>
                                <Text style={{fontSize: 15, alignSelf:'flex-start'}}>Rp. {convertIDR(item.item.totalPrice)}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{ flexDirection: 'row', borderRadius: 5}}>
                            <TouchableOpacity style={{ paddingHorizontal: 10,borderRadius: 50, height:30}} onPress={() => this.decrementHandler(item.item.id)}>
                                <Text style={{fontSize:30, fontWeight:'bold', color:'#ff8d58'}}>-</Text>
                            </TouchableOpacity >
                            <View style={{ paddingHorizontal: 10}}>
                                <Text style={{ alignSelf:'center', fontSize: 25}}>{item.item.qty}</Text>
                            </View>
                                    <TouchableOpacity style={{ paddingHorizontal: 10, borderRadius: 50}} onPress={() => this.incrementHandler(item.item.id)}>
                                <Text style={{ fontSize: 30, fontWeight:'bold', color:'#ff8d58' }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                    }
                        />
                    <ConfirmButton text1="Confirm" text2="Cancel"  button1={this.confirmHandler} button2={() => this.props.navigation.goBack()} />  
                </View>           
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        order: state.order
    }
}

export default connect (mapStateToProps)(OrderScreen)