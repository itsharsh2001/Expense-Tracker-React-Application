import React from "react";
// import { useState } from 'react'
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);  we wouldn't do this hardcoding
  // const expenseTitle = 'Car Insurance';       instead we will use props
  // const expenseAmount = 294.67;

  // pura yha useState ka demo hai

  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () =>{   //clickHandler aise hi random naam de
  // setTitle('Updated!');
  // console.log(title);//diya function ko kuch bhi naam de do
  // };

  return (
    //Instead of wrapping ExpanseDate component in a div we will wrap  //it into Card component
    // <div className="expense-item">
    //for semantic reasons using li beacuse ul is used in ExpanseList
    <li>
      <Card className="expense-item">
        {/* can't display object asitis have to change it to string first */}
        {/* <div>{expenseDate.toISOString()}</div>   */}
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* onClick ke andar ke function pe () nhi lagate kyuki vo
            yha execute nhi ho ra bs point ho ra hai yha execute uper
            vala function pe jake hi hoga jha declare hua hai */}
        {/* <button onClick = {clickHandler}>Change Title</button>  ye bas demo purpose ke liya tha*/}
      </Card>
    </li>
    //  </div>
  );
}
