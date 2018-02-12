import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, INCREMENT_COMMENT, DECREMENT_COMMENT} from './actionTypes';
import uuid from 'uuid';


const addComment = text => {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
}

const removeComment = id => {
    type: REMOVE_COMMENT,
    id
}

const editComment = (id,text) => {
    type: EDIT_COMMENT,
    id,
    text
}

const incrementComment = id => {
    type: INCREMENT_COMMENT,
    id
}

const decrementComment = id => {
    type: DECREMENT_COMMENT,
    id
}