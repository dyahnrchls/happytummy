import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default class OrderButton extends Component {
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <TouchableOpacity style={styles.button} onPress={this.props.button}>
                    <Text style={{ fontWeight: 'bold'}} >
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: '45%',
        height: 40,
        backgroundColor: '#ff8d58',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginBottom: 30,
        borderRadius: 5,
        elevation: 10
    }
})