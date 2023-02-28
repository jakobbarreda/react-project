import { useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy = [
  {
    id: 1,
    title: "hello world",
    date: new Date("january 25 2020"),
    price: 100,
  },
  {
    id: 2,
    title: "crazy 8's",
    date: new Date("january 25 2019"),
    price: 200,
  },
  {
    id: 3,
    title: "come down",
    date: new Date("january 25 2019"),
    price: 132,
  },
  {
    id: 4,
    title: "pizza on fire",
    date: new Date("january 25 2019"),
    price: 332,
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesList expenses={expenses} />;
    </div>
  );
}
export default App;
