import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />
        {/* {props.items.map((expense) => ( */}
        {/*for filtering based on year below vala code and not above wala*/}
        {/* Also long statements like if else for loop etc are not allowed in {} these dynamic javascript programming vale braces so use ternary operators for conditioning like below or you can split the ternary operator in 2 && expressions like below*/}
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>} */}
        {/* In this && operation if condition left of && is true it returns jsx in right it is a feature of javascript */}
        {/* {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id} //always add such a key in reactjs lists
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* above code snippet is fine below is another lean approach */}
        {/* {expensesContent} */}
        <ExpensesList items={filteredExpenses} />

        {/* <ExpenseItem     No need for this static hardcoding now we have 
        title={props.items[0].title}       dynamic coding above
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
      </Card>
    </div>
  );
}
