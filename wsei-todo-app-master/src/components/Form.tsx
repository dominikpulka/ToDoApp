import React, {FC, useState } from 'react';
import styled from 'styled-components';
import { TextInput, Button } from 'react-native';

import { useDispatch } from 'react-redux';
import { setNewElTodoList } from '../actions/todolistActions';
import { ISingleElList } from '../entitles/todoSingleEl';

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`;

const CustomText = styled.TextInput`
    border: 1px solid;
    padding: 20px;
    color: black;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 50px;
    font-size: 18px;
    text-align: center;
`;
const BorderButton = styled.TouchableHighlight`
    margin: 10px auto 0 auto;
    padding: 0;
    background: #B22222;
    width: 100px;
    height: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`
const TextButton = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: white;
    margin-top: -2px;
`

type setNewElTodoList = ReturnType<typeof setNewElTodoList>;

const Form: FC<{switchView(formView: boolean)}> = props =>{
    const dispatch = useDispatch();
    const[nameInput, setNameInput] = useState<string>('');
    const[descInput, setDescInput] = useState<string>('');

    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text);
    }
    const descValueChange = (txt) => {
        setDescInput(txt.nativeEvent.text);
    }

    const save = () => {
        dispatch<setNewElTodoList>(setNewElTodoList({
            name: nameInput,
            description: descInput
        } as ISingleElList
        ));
        props.switchView(false)
    }

    return(
        <Wrapper>
            <CustomText value={nameInput} onChange={nameValueChange} placeholder="Name" placeholderTextColor = "#00008B"/>
            <CustomText value={descInput} onChange={descValueChange} placeholder="Description" placeholderTextColor = "#00008B"/>
            <BorderButton onPress={save}> 
            <TextButton>Add</TextButton>
            </BorderButton>
        </Wrapper>
    )
}

export default Form;