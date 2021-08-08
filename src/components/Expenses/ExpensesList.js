import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  //   let expensesContent = <p>No Expenses Found.</p>; //you can store jsx content in variables it  is totally normal to use it.

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
