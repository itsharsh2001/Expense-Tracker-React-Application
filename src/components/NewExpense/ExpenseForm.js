import React, { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    //Making separate states like above is fine here is a different approach
    //where an object is passed for different states at once to make them one
    // const [userInput, setUserInput] = useState({
        // enteredTitle: '',
        // enteredAmount: '',
        // enteredDate: ''
    // })


    const titleChangeHandler = (Event) => {
        setEnteredTitle(Event.target.value);

        // setUserInput({              This is kaam chalau way of updating state when new state
        //     ...userInput,           depends upon value of old state it can sometime cause error
        //     enteredTitle: Event.target.value
        // })

        // setUserInput((preState)=>{
        //     return{...prevState, enteredTitle: Event.target.value}; //This is correct way of above
        // })
    }

    const amountChangeHandler = (Event) => {
        setEnteredAmount(Event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: Event.target.value
        // })
    }

    const dateChangeHandler = (Event) => {
        setEnteredDate(Event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: Event.target.value
        // })
    }

    const submitHandler = (Event) => {
        Event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,  //+ is used to enforce a number conversion otherwise it becomes a string
            date: new Date(enteredDate)
        }

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
