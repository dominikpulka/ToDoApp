import * as React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';

import {HomeView, AccountLogoLeft, AccountLogoRight, AccountLogoMid} from '../../components/StyledComponents.tsx';
import Colors from '../../constans/Colors'
//import { AccountLogo } from '../../components/StyledComponents.tsx';

const AccountText = styled.Text`
    margin: 30px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

const CustomImage = styled.Image`
    width: 200px;
    height: 200px;
    margin: 50px;
`;

interface IContactsProps { }

const Home: React.FC<IContactsProps> = (props) =>{
    return(
        <HomeView>
            <AccountLogoLeft source={require('../../assets/rafa.png')}/>
            <AccountText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</AccountText>
            <AccountLogoMid source={require('../../assets/rafa.png')}/>
            <AccountText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</AccountText>
            <AccountLogoRight source={require('../../assets/rafa.png')} />
        </HomeView>
    )
}

export default Home;