import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        //this.props.dispatch(editExpense(this.props.expense.id, expense)); BELOW USES mapDispatchToProps
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = (e) => {
        //this.props.dispatch(removeExpense({ id: this.props.expense.id }));
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (object) => dispatch(startRemoveExpense(object))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);