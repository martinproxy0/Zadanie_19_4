import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, INCREMENT_COMMENT, DECREMENT_COMMENT} from './actionTypes';
import uuid from 'uuid';


export const addComment = text => {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
}

export const removeComment = id => {
    type: REMOVE_COMMENT,
    id
}

export const editComment = (id,text) => {
    type: EDIT_COMMENT,
    id,
    text
}

export const incrementComment = id => {
    type: INCREMENT_COMMENT,
    id
}

export const decrementComment = id => {
    type: DECREMENT_COMMENT,
    id
}