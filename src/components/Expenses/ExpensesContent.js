import "./ExpensesContent.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesContent = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesContent;
