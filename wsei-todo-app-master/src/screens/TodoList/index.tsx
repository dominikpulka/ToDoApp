import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';
import React, {FC, useState } from 'react';

import { TodoView } from '../../components/StyledComponents.tsx';
import Colors from '../../constans/Colors'

import Form from '../../components/Form';
import TodoList from '../../components/TodoList';


const TodoListScreen = ({navigation}) => { 
    const [formView, setFormView] = useState<boolean>(false);

    return(
        <TodoView>
            {formView ? (
                <Form switchView={setFormView} />
            ) : (
                <TodoList switchView={setFormView}/>
            )}
        </TodoView>
    );
};

export default TodoListScreen;