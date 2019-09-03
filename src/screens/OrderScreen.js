import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native'

import ConfirmButton from '../components/ConfirmButton'


const orderList = [
    {
        id: 1,
        name: "choco lava",
        qty: 2
    },
    {
        id: 4,
        name: "ice cream",
        qty: 4
    },
    {
        id: 6,
        name: "fried chicken",
        qty: 2
    },
    {
        id: 7,
        name: "chef's salad",
        qty: 3
    }
]

export default class OrderScreen extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state = {
            item: [],
            total: 1,
            visible: false,
            price: 20000
        }
    }

    incrementHandler = () => {
        const setPrice = 20000
        this.setState({
            total: this.state.total + 1,
            price: this.state.price + setPrice
        })
    }

    decrementHandler = () => {
        const setPrice = this.state.price
        if(this.state.total === 0){
            this.setState({
                total: 0
            })
        }else{
            this.setState({
                total: this.state.total - 1,
                price: this.state.price - setPrice
            })
        }
    }


    render(){
        return(
            <View style={{ backgroundColor: '#dfe6e9' , flex:1}}>
                <View style={{marginBottom: 10}}>
                <Text style={{ paddingLeft: 20, paddingTop: 20, fontSize: 25, fontWeight: 'bold' }}>My Order {this.state.clicked}</Text>   
                <FlatList style={{ margin: 5 }}
                    data={orderList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={(item, index) => 
                <View key={index} style={{ borderRadius: 5, marginHorizontal: 10, marginTop: 20, padding: 10, backgroundColor: '#ecf0f1', flexDirection: 'row', justifyContent: 'space-between', height: 80, elevation: 8}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../assets/images/pastry.jpg')} style={{width:70, height:'100%'}} />
                        <View style={{marginLeft:10}}>
                            <View>
                                <Text style={{ fontSize: 18 }}>{item.item.name}</Text>
                            </View>
                            <View style={{marginVertical:10}}>
                                <Text style={{fontSize: 15, alignSelf:'flex-start'}}>Price: {this.state.price}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{ flexDirection: 'row', borderRadius: 5}}>
                            <TouchableOpacity style={{ paddingHorizontal: 10, backgroundColor:'#dfe4ea',borderWidth:1, height:30}} onPress={() => this.decrementHandler()}>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>-</Text>
                            </TouchableOpacity >
                            <View style={{ paddingHorizontal: 10, borderBottomWidth: 1, borderTopWidth: 1}}>
                                <Text style={{ alignSelf:'center', fontSize: 18 }}>{this.state.total}</Text>
                            </View>
                            <TouchableOpacity style={{ paddingHorizontal: 10, borderWidth: 1, backgroundColor: '#dfe4ea'}} onPress={() => this.incrementHandler()}>
                                <Text style={{ fontSize: 18, fontWeight:'bold' }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                    }
                        />
                </View>           
                <ConfirmButton text1="Confirm" text2="Cancel"  button1={() => this.props.navigation.navigate('MenuScreen')} button2={() => this.props.navigation.goBack()} />  
            </View>
        )
    }
}