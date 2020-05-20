import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElList } from '../entitles/todoSingleEl';
export interface ITodoListReducer {
    todoList: ISingleElList[];
}

const defaultState = (): ITodoListReducer=> ({
    todoList: [{
        name: 'Pierwszy',
        description: 'Pierwszy description'
    },
    {
        name: 'Drugi',
        description: 'Drugi description'
    }]
});

export default (state = defaultState(), action: any): ITodoListReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEMENT: {
            return {
                ...state,
                todoList: [...state.todoList, action.newElement]
            };
        }
        default: {
            return state;
        }
    }
};