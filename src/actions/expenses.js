import uuid from 'uuid';
import database from '../firebase/firebase.js';

// add expense - OLD WAY, KEPT FOR REFERENCE
// export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });

// add expense to redux
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

// Add expense to firebase
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt };
        
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// remove expense from redux
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// remove expense from firebase
export const startRemoveExpense = ({ id } = {}) => {
    return(dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};


// edit expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// edit expense in firebase
export const startEditExpense = (id, updates) => {
    return(dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

// get expenses from redux
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});
  
// get expenses from firebase
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            //console.log(expenses);
            dispatch(setExpenses(expenses));
        });
    };
};