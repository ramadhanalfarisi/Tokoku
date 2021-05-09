const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value : 0,
    age : 18
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_VALUE' :
            return {
                ...state, 
                value : state.value + 1
            }
    }
}

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log("State : ", store.getState())
})

store.dispatch({type : 'ADD_VALUE'})