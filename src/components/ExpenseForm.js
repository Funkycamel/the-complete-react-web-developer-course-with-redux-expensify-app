import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    
    // * *
    // I am using the transform-class-properties in babel so instead of writing the below, I can just create
    // state like I am without the use of constructor
    // * *
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         description: '',
    //         note: '',
    //         amount: ''
    //     };
    // }
    
    // state = {
    //     description: '',
    //     note: '',
    //     amount: '',
    //     createdAt: moment(),
    //     calendarFocused: false,
    //     error: ''
    // };

    constructor(props) {
        super(props);
        //console.log(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        } 
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            // Set eror state equal to 'Please provide a description and amount.'
            this.setState(() => ({ error:'Please provide a description and amount' }));
        } else {
            // Clear the error
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false }
                    displayFormat="MMM DD YYYY"
                />
                <textarea
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    className="textarea"
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button">{this.props.expense ? 'Save Expense' : 'Add Expense'}</button>
                </div>
            </form>
        )
    }
}