import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount:109500 }));

const state = store.getState(); // Grab the entire store
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); // get both the expenses and filters
console.log(visibleExpenses);


// addExpense -> Water bill
// addExpense -> Gas bill
// setTextFilter - bill (2 items) -> water (1 item)
// getVisibleExpenses -> print visible ones to screen

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
