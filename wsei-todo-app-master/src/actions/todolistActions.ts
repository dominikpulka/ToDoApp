import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElList } from '../entitles/todoSingleEl';

export const setNewElTodoList = (newElement: ISingleElList) => ({
    type: actionTypes.SET_NEW_ELEMENT,
    newElement
})