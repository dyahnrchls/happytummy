import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, FlatList } from 'react-native'

import OrderButton from '../components/OrderButton'

import { connect } from 'react-redux'
import { getCategory } from '../store/actions/category'
import { getMenu, getMenuCategory } from '../store/actions/menu'
import { postOrder, addToOrder, updateOrder } from '../store/actions/order'
import { convertIDR } from '../utils/helper.js'


class MenuScreen extends Component{

    static navigationOptions = {
        header: null
    }


    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.dispatch(getCategory())
        this.props.dispatch(getMenu())
        }

    getMenuByCategory = (categoryId) => {
        if(categoryId === 1){
            this.props.dispatch(getMenu())
        }else{
            this.props.dispatch(getMenuCategory(categoryId))
        }
    }

    handleOrder = (item) => {
        this.setState({
            order: [...this.state.order,  item]
        })     
    }

    countMenu = async (data) => {
        let order = this.props.order.item
        const index = order.findIndex(item => item.id === data.id)
        
        let orderData = order[index]
        
        if(index >= 0){    
            let incQty = orderData.qty + 1
            let total = orderData.price * incQty
            let incOrder = {
                ...orderData,
                qty: incQty,
                totalPrice: total
            }

            order[index] = incOrder
            await this.props.dispatch(updateOrder(order))

        }else{
            data = {
                ...data,
                qty: 1,
                totalPrice: data.price,
                status: 0
            }

            await this.props.dispatch(addToOrder(data))
        }
    }

    goToOrderScreen = () => {
        if(this.props.order.item.length == 0){
            alert('you must order something')
        }else{
            this.props.navigation.navigate('OrderScreen')
        }
    }


    render(){
        console.log(this.props)
        return(
            <View style={{ backgroundColor: '#fff1e1'}}>
                <View style={{ paddingTop: 15, paddingBottom: 10,paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff1e1'}}>
                    <Text style={{fontSize:17, fontWeight: 'bold'}}>Table Number: {this.props.navigation.getParam('tableNumber')}</Text>
                </View>
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text style={{paddingLeft: 10, paddingTop: 5, fontSize:25, fontWeight:'bold'}}>Menu</Text>
                </View>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} accessibilityViewIsModal={true} style={{paddingHorizontal: 10,paddingTop:10, flexDirection: 'row'}}>
                            {this.props.category.item!==null && this.props.category.item.map((item, index) => {
                                return(
                                    <TouchableOpacity key={index} onPress={() => this.getMenuByCategory(item.id)} style={{ marginRight: 15, backgroundColor:'#ff8d58', paddingVertical: 8, paddingHorizontal:15, borderRadius: 10, elevation:8, marginBottom: 10}}>
                                            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                            )}
                        </ScrollView>
                </View>
                <View style={{height:'80%'}}>
                    <FlatList style={{ margin: 5 }}
                        data={this.props.menu.item}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        renderItem={(item, index) => 
                            <TouchableOpacity key={index} onPress={() => this.countMenu(item.item)} style={{borderRadius: 20, justifyContent: 'center', marginHorizontal: 10, marginTop: 10, backgroundColor: '#FFFF', width: '45%', height: 130,elevation:5}}>
                                <ImageBackground source={{ uri: item.item.photoUrl}} imageStyle={{borderRadius:20}} style={{width:'100%', height:'100%', borderRadius: 20}}>
                                    <View style={{ flex: 1, justifyContent: 'flex-end', marginTop: 80, height: '100%', alignItems: 'flex-end', backgroundColor:'rgba(52, 52, 52, 0.8)'}}>
                                        <Text style={{ alignSelf: 'flex-start', padding: 5,fontWeight: 'bold', color:'white',fontSize: 18, marginTop: 10}}>{item.item.name}</Text>
                                        <Text style={{ alignSelf: 'flex-start', paddingLeft: 5, paddingBottom: 5, fontWeight: 'bold', color: 'white', fontSize: 13 }}>Rp. {convertIDR(item.item.price)}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        }
                    />
                    <OrderButton text="check your order" button={this.goToOrderScreen}/>
                </View>                
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        category: state.category,
        menu: state.menu,
        order: state.order
    }
}

export default connect(mapStateToProps)(MenuScreen)