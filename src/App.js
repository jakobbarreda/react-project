import { useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyData = [
  {
    id: 1,
    title: "Car Insurance",
    date: new Date("january 25 2022"),
    price: 238.0,
  },
  {
    id: 2,
    title: "Rent",
    date: new Date("febuary 05 2022"),
    price: 885,
  },
  {
    id: 3,
    title: "Hotel",
    date: new Date("april 13 2021"),
    price: 400.0,
  },
  {
    id: 4,
    title: "Car Payment",
    date: new Date("may 19 2020"),
    price: 332.54,
  },
  {
    id: 5,
    title: "Apple",
    date: new Date("december 14 2020"),
    price: 1000.0,
  },
  {
    id: 6,
    title: "WingStop",
    date: new Date("auguest 20 2022"),
    price: 60.0,
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyData);

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
