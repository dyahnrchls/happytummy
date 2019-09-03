import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native'

export default class MainScreen extends Component{

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
            tableNumber: text
        })
    }

    onSubmit = () => {
        this.props.navigation.navigate('MenuScreen', {tableNumber: this.state.tableNumber})
    }

    render(){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#dfe6e9'}}>
                    <Image source={require('../assets/images/table.png')} style={{alignSelf:'center', width: 300, height:200}} />
                    <Text style={{alignSelf: 'center', fontSize: 20, fontFamily:'Lato-Regular'}}>Input your table number</Text>                
                    <View style={{borderRadius:5, borderWidth: 0.7, width: '45%', alignSelf:'center', marginTop: 10}}>
                        <TextInput placeholder='input here...' keyboardType='numeric' style={{textAlign: 'center', fontSize:15}}  onChangeText={(e) => this.handleInput(e)} />
                    </View>
                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 8, backgroundColor: '#cd84f1', borderWidth: 1, width: '45%', paddingVertical: 5, borderRadius: 5, borderColor: '#95a5a6' }} onPress={() => this.onSubmit()} >
                        <Text style={{alignSelf:'center', fontSize:15}} >Done</Text>
                    </TouchableOpacity>
                
            </View>
        )
    }
}