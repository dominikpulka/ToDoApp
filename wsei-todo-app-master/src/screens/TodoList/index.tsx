import * as React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';


import Colors from '../../constans/Colors'

const TodoListText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

const CustomImage = styled.Image`
    width: 50px;
    height: 50px;
    margin: 50px;
`;

interface ITodoListProps { }

const Home: React.FC<ITodoListProps> = (props) =>{
    

    return(
        <View>
            <TodoListText>To jest home screen 3</TodoListText>
            <CustomImage
                source={require('../../assets/logomin.png')}
            />
        </View>
    )
}

export default Home;