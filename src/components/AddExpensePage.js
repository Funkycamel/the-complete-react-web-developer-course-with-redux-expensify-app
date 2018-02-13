import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {

    onSubmit = (expense) => {
        //console.log(expense);
        //props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense); // because we use mapDispatchToProps below, this addExpense is assumed to be an action creator
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm onSubmit={this.onSubmit}/>
                </div>
            </div>
        );
    }
}


// Using this and not the commented out props.dispatch(addExpense(expense)) as it's easier to test
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);