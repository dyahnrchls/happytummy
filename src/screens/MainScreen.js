import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, Image, Alert} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import { addTransaction } from '../store/actions/transaction'
import { connect } from 'react-redux'

class MainScreen extends Component{

    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state={
            tableNumber: '',
            input: ''
        }
    }

    handleInput = (text) => {
        this.setState({
            input: text
        })
    }


    onSubmit = async () => {
        if(this.state.input.length == 0 || this.state.input == 0){
            alert('input your table number!!')
        }else{
            this.setState({
                tableNumber: this.state.input,
                input: ''
            })
            await AsyncStorage.setItem('TABLE_NUMBER', `${this.state.tableNumber}`)
            await this.props.dispatch(addTransaction({
                tableNumber: parseInt(this.state.tableNumber),
                isPaid: false
            }))
            await AsyncStorage.setItem('TRANSACTION_ID', `${this.props.transaction.item.id}`)
            console.log(this.props.transaction.item.tableNumber)
            this.props.navigation.navigate('MenuScreen', {tableNumber: this.state.tableNumber})
        }
    }

    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f6fa'}}>
                    <Image source={require('../assets/images/table.png')} style={{alignSelf:'center', width: 300, height:200}} />
                    <Text style={{alignSelf: 'center', fontSize: 20, fontFamily:'Lato-Regular'}}>Input your table number</Text>                
                    <View style={{borderRadius:5, borderWidth: 0.7, width: '45%', alignSelf:'center', marginTop: 10}}>
                        <TextInput placeholder='input here...' keyboardType='numeric' style={{textAlign: 'center', fontSize:15}} value={this.state.input}  onChangeText={this.handleInput} />
                    </View>
                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 8, backgroundColor: '#cd84f1', borderWidth: 1, width: '45%', paddingVertical: 5, borderRadius: 5, borderColor: '#95a5a6' }} onPress={() => this.onSubmit()} >
                        <Text style={{alignSelf:'center', fontSize:15}} >Done</Text>
                    </TouchableOpacity>
                
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        transaction: state.transaction
    }
}

export default connect(mapStateToProps)(MainScreen)