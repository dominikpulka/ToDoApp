import React, {FC, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Text, Button } from 'react-native';
import { IState } from '../reducers';
import { ITodoListReducer } from '../reducers/todolistReducer';
import { ISingleElList } from '../entitles/todoSingleEl';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Layout from '../constans/Layout';
import { HomeView } from '../components/StyledComponents.tsx';

const Wrapper = styled.ScrollView`
    padding-top: ${Layout.statusBar + 10}px;
`;
const SingelElementList = styled.View`
    border-radius: 25px;
    background: #FFFAF0;
    margin: 0 0 20px 0;
    padding: 10px 5px;
    width: 100%;
`
const BorderButton = styled.TouchableHighlight`
    margin: 7px auto 20px auto;
    margin-bottom: 50px;
`
const NameText = styled.Text`
    color: blue;
    font-size: 18px;
    text-align: center;
`
const DescText = styled.Text`
    font-size: 15px;
    text-align: center;
`
const TodoList: FC<{switchView(formView: boolean)}> = props =>{
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList)
    const goToForm = () => {
        props.switchView(true);
    }
    return(
        <Wrapper>
            {todoListState.todoList.map((elem: ISingleElList , index: number) => 
            <SingelElementList key={index}>
                <NameText>{elem.name}</NameText>
                <DescText>{elem.description}</DescText>
            </SingelElementList>
            )}
            <BorderButton onPress={goToForm}activeOpacity={1} underlayColor={'transparent'}>
                <MaterialCommunityIcons
                    name='plus-circle-outline'
                    color='#B22222'
                    size={50}/>
            </BorderButton>
        </Wrapper>
    )
};

export default TodoList;