import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, FlatList } from 'react-native'
import { Card} from 'native-base'

import OrderButton from '../components/OrderButton'

import { connect } from 'react-redux'
import { getCategory } from '../store/actions/category'
import { getMenu, getMenuCategory } from '../store/actions/menu'
import { postOrder, addToOrder } from '../store/actions/order'


class MenuScreen extends Component{

    static navigationOptions = {
        header: null
    }


    constructor(props){
        super(props)
        this.state = {
            order: [],
            cart: [],
            total: 0
        }
    }

    componentDidMount(){
        this.props.dispatch(getCategory())
        this.props.dispatch(getMenu())
        }

    getMenuByCategory = (categoryId) => {
        this.props.dispatch(getMenuCategory(categoryId))
    }

    handleOrder = (item) => {
        this.setState({
            order: [...this.state.order,  item]
        })     
    }

    countMenu = (id) => {
        this.props.dispatch(addToOrder(id))
        // let item = parseInt(this.props.order.addItem.filter(x => x === id).length) + 1
        alert(this.props.order.addItem)
    }

    confirmOrder = () => {
        this.props.dispatch(postOrder())
    }

    cleanOrder = () => {
        this.setState({
            order: []
        })
    }
    render(){
        console.log(this.props)
        return(
            <View style={{ backgroundColor: '#dfe6e9'}}>
                <View style={{ paddingTop: 15, paddingBottom: 10,paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#d1d8e0'}}>
                    <Text style={{fontSize:17, fontWeight: 'bold'}}>Table Number: {this.props.navigation.getParam('tableNumber')}</Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>02:13</Text>
                </View>
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text style={{paddingLeft: 10, paddingTop: 5, fontSize:25, fontWeight:'bold'}}>Menu</Text>
                    <TouchableOpacity style={{justifyContent: 'flex-end', flex: 1, alignItems:'flex-end'}} onPress={() => this.props.navigation.navigate('TransactionScreen')}>
                        <Text style={{ paddingHorizontal: 10, paddingTop: 5, fontSize: 15, fontWeight: 'bold'}}>View Bill</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} accessibilityViewIsModal={true} style={{paddingHorizontal: 10,paddingTop:10, flexDirection: 'row'}}>
                            {this.props.category.item!==null && this.props.category.item.map((item, index) => {
                                return(
                                    <TouchableOpacity key={index} onPress={() => this.getMenuByCategory(item.id)} style={{ marginRight: 15, backgroundColor:'#cd84f1', paddingVertical: 8, paddingHorizontal:15, borderRadius: 10, elevation:8, marginBottom: 10}}>
                                            <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                            )}
                        </ScrollView>
                </View>
                <View style={{height:650}}>
                    <FlatList style={{ margin: 5 }}
                        data={this.props.menu.item}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => item.id}
                        renderItem={(item, index) => 
                            <TouchableOpacity key={index} onPress={() => this.countMenu(item.id)} style={{borderRadius: 20, justifyContent: 'center', marginHorizontal: 10, marginTop: 10, backgroundColor: '#FFFF', width: 180, height: 130,elevation:5}}>
                                <ImageBackground source={require('../assets/images/pastry.jpg')} style={{width:'100%', height:'100%'}}>
                                    <View style={{ flex: 1, justifyContent: 'flex-end', marginTop: 70, height: '100%', alignItems: 'flex-end', backgroundColor:'rgba(52, 52, 52, 0.8)'}}>
                                        <Text style={{ alignSelf: 'flex-start', padding: 5,fontWeight: 'bold', color:'white',fontSize: 18, marginTop: 10}}>{item.item.name}</Text>
                                        <Text style={{ alignSelf: 'flex-start', padding: 5, fontWeight: 'bold', color: 'white', fontSize: 13 }}>Price: {item.item.price}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        }
                    />
                    <View style={{height:80}}></View>
                </View>
                <View>
                    <OrderButton text="VIEW ORDER" button={() => this.props.navigation.navigate('OrderScreen')}/>
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