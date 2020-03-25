import * as React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';


import Colors from '../../constans/Colors'

const NotificationsText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

const CustomImage = styled.Image`
    width: 200px;
    height: 200px;
    margin: 50px;
`;

interface INotificationsProps { }

const Home: React.FC<INotificationsProps> = (props) =>{
    return(
        <View>
            <NotificationsText>To jest screen powiadomień </NotificationsText>
            <CustomImage
                source={require('../../assets/fota.png')}
            />
        </View>
    )
}

export default Home;