import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrmentCount = ( { decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( { count }) => ({
    type: 'SET',
    count
});

const reset = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// pure functions - output is only determined by the input
// Not a pure function as it relies on an external variable
// let a = 10;
// const add = (b) => {
//     return a + b;
// };
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
        };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: state.count = 0
            };
        default:
            return state;
    }   
}

const store = createStore(countReducer);



// Subscribe is called anytime an action is called
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 10
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount({ incrementBy: 5 }));

unsubscribe(); 

store.dispatch(decrmentCount( { decrementBy: 1 }));

store.dispatch(setCount( { count: 200 }));

// store.dispatch(reset());

// store.dispatch({
//     type: 'INCREMENT'
// });


// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 2
// });

// store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

console.log(store.getState());