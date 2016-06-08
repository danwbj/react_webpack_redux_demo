"use strict";

import Immutable from 'immutable' ;

import ActionTypes from "../constants/index.js"

const initialState = Immutable.fromJS({
    one_data:null
});

export default function ONE(state = initialState, action = null) {
    let rState
    let Action
    switch (action.type) {
        case ActionTypes.APP_TEST:
            Action = Immutable.fromJS(action);
            return state.mergeDeep(Action);
        default :
            return state
    }
}
