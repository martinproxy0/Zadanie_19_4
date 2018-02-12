import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, INCREMENT_COMMENT, DECREMENT_COMMENT} from './actionTypes';
import * as actions from "./actions";

export const comments = (state = [], action) => {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state.comments];
        case REMOVE_COMMENT:
            return [
                state.filter(comment => comment.id !== action.id)
            ]
        case EDIT_COMMENT:
            return [
                state.map( comment => {
                    return comment.id === action.id ?
                        Object.assign({}, comment, {
                            text: action.text
                        }) :
                        comment
                })
            ]
        case INCREMENT_COMMENT:
            return [
                state.map( comment => {
                    return comment.id === action.id ?
                        Object.assign({}, comment, {
                            votes: comment.votes + 1
                        }) :
                        comment
                })
            ]
        case DECREMENT_COMMENT:
            return [
                state.map( comment => {
                    return comment.id === action.id ?
                        Object.assign({}, comment, {
                            votes: comment.votes - 1
                        }) :
                        comment
                })
            ]
        default:
            return state;
    }
}