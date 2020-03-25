import * as React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../../constans/Colors';

const WelcomeText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

const CustomImage = styled.Image`
    width: 50px;
    height: 50px;
    margin: 50px;
`;

interface IHomeProps { }

const Home: React.FC<IHomeProps> = (props) =>{

    return(
        <View>
            <WelcomeText>To jest home screen </WelcomeText>
            <CustomImage
                source={require('../../../assets/logo.png')}
            />
        </View>
    )
}

export default Home;