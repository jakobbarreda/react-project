import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  // event handler, recieves data from form submit/ sends data up to App
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 10000).toString(),
    };
    props.onAddExpense(expenseData);
  };

  // hidden state/ cancel button handler
  const [hidden, setHidden] = useState(true);
  const trueClickHandler = () => {
    setHidden(true);
  };

  const falseClickHandler = () => {
    setHidden(false);
  };

  return (
    <div className="new-expense">
      {hidden && <button onClick={falseClickHandler}>Add Form</button>}
      {!hidden && (
        <ExpenseForm
          onTrueClick={trueClickHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
