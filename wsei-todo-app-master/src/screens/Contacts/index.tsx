import * as React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';


import Colors from '../../constans/Colors'

const ContactsText = styled.Text`
    margin: 120px 20px;
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
        <View>
            <ContactsText>To jest screen kontaktów </ContactsText>
            <CustomImage
                source={require('../../assets/fota1.png')}
            />
        </View>
    )
}

export default Home;