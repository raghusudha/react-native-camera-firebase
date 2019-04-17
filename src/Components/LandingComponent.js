import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default class LandingComponent extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => {
        navigation.title = "LandingComponent"     
    }
   

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Bhilwara Attendence App</Text>
                <Button title="Landing" />
                <Button title="Login" onPress={() => this.props.navigation.navigate('LoginComponent')} />
                <Button title="Register" onPress={() => this.props.navigation.navigate('RegisterComponent')} />
                <Button title="Profile" onPress={() => this.props.navigation.navigate('Profile')} />

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        padding:10,
        
      },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});
