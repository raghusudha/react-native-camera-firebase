import React from 'react'
import {
    View,
    Button,
    TextInput,
    Text,
    StyleSheet,
    ToastAndroid
} from 'react-native';
import{ registerUser }from '../Services/services';
const Toast = (props) => {
    if (props.visible) {
      ToastAndroid.showWithGravityAndOffset(
        props.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return null;
    }
    return null;
  };
  

export default class RegisterComponent extends React.Component {

    static navigationOptions = ({ navigation }) => {
        navigation.title = "RegisterComponent"

    }
        constructor(props) {
            super(props);
            this.state = {
                visible:false,
                message:'User Created',
            user:{ username: '', password: '', email: '', phone_number: ''}
            }

            this.handleChange=this.handleChange.bind(this);
            this.AddUser=this.AddUser.bind(this)
        }


    AddUser(){
        registerUser(this.state.user).then(result=>{
            this.setState({message:'User Created Successfully',visible:true});
        }).catch(err=>{
            this.setState({message:err.message,visible:true});
        });
    }
    handleChange(e,fieldName){
        let currentState=this.state;
        currentState.user[fieldName]=e.nativeEvent.text;
        this.setState(currentState);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Bhilwara Attendence App</Text>
                <Text style={styles.welcome}>Register Here</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChange={(e)=>{
                        this.handleChange(e,'username')
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChange={(e)=>{
                        this.handleChange(e,'password')
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChange={(e)=>{
                        this.handleChange(e,'email')
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Phone_Number'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChange={(e)=>{
                        this.handleChange(e,'phone_number')
                    }}
                />
                <Button
                    title='Sign Up'
                    onPress={this.AddUser}
                />
    <Toast visible={this.state.visible} message={this.state.message} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: 'grey',
        borderColor: 'black',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        margin: 10,
    }, welcome1: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },
})