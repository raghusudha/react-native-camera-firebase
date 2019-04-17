import React, { Component } from 'react';
import { View, StyleSheet,Button } from 'react-native';

import Camera from 'react-native-camera';
import { RNCamera, FaceDetector } from 'react-native-camera';


export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => {
        navigation.title = "Profile"     
    }
   

    takePicture() {
        this.camera
            .capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <View >
                <Camera
                    ref={cam => { this.camera = cam }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                >

                    <Button
                        title='ClickToCapture'
                        style={styles.capture} onPress={this.takePicture.bind(this)}
                        onPress={this.login}
                    />
                </Camera>


            </View>

        )
    }
}
const styles = StyleSheet.create({

    
//     preview: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         height: Dimensions.get('window').height,
//         width: Dimensions.get('window').width},
//         capture: {
//           flex: 0,
//           backgroundColor: '#fff',
//           borderRadius: 5,
//           color: '#000',
//           padding: 10,
//           margin: 40  
//         }

 });
