import React from 'react'
import RegisterComponent from '../Components/RegisterComponent';
export default class Register extends React.Component {
 
    constructor(props) {
        super(props);   
    }       

    render(){
        return(
            <RegisterComponent navigation={this.props.navigation} />
        )
    }
}