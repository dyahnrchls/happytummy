import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default class ConfirmButton extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'space-between', marginHorizontal: 10 ,alignItems: 'center' }}>
                <TouchableOpacity style={styles.button1} onPress={this.props.button1}>
                    <Text style={{ fontWeight: 'bold', color:'#dfe6e9' }} >
                        {this.props.text1}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={this.props.button2}>
                    <Text style={{ fontWeight: 'bold', color: '#dfe6e9' }} >
                        {this.props.text2}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button1: {
        width: '40%',
        height: 40,
        backgroundColor: '#27ae60',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginBottom: 55,
        borderRadius: 5,
        marginLeft: 10,
        elevation: 10
    },
    button2: {
        width: '40%',
        height: 40,
        backgroundColor: '#ff6b6b',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        marginBottom: 55,
        marginLeft: 200,
        borderRadius: 5,
        elevation: 10
    }
})