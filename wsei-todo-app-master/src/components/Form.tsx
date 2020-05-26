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
    padding: 10px;
    color: black;
    width: 100%;
`;
const BorderButton = styled.Button`
    padding: 15px 25px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
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
            <CustomText value={nameInput} onChange={nameValueChange} placeholder="Name"/>
            <CustomText value={descInput} onChange={descValueChange} placeholder="Description"/>
            <BorderButton title="Zapisz" onPress={save} />
        </Wrapper>
    )
}

export default Form;