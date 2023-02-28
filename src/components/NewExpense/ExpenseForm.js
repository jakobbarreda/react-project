import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // title state/ title onChange handler
  const [title, setTitle] = useState("");
  const titleChangeHandler = ({ target }) => {
    setTitle(target.value);
  };

  // amount state/ amount onChange handler
  const [amount, setAmount] = useState("");
  const amountChangeHandler = ({ target }) => {
    setAmount(target.value);
  };
  // date state/ date onChange handler
  const [date, setDate] = useState("");
  const dateChangeHandler = ({ target }) => {
    setDate(target.value);
  };

  // submit handler
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      price: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min=".01"
            step=".01"
            value={amount}
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
