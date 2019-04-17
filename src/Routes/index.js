import { createStackNavigator, createAppContainer } from 'react-navigation';

import LandingComponent from '../Components/LandingComponent';
import RegisterComponent from '../Components/RegisterComponent';
import LoginComponent from '../Components/LoginComponent';
import Profile from '../Components/Profile'


const Route = createStackNavigator(
    {

        RegisterComponent: RegisterComponent,
        LoginComponent: LoginComponent,
        LandingComponent: LandingComponent,
        Profile:Profile,

    },
    {
        initialRouteName: "LandingComponent"
    },

);
const RouterConfig = createAppContainer(Route);

export default RouterConfig;