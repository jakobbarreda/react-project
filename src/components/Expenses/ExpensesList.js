import "./ExpensesList.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesContent from "./ExpensesContent";
import ExpensesChart from "./ExpensesChart";

export default function ExpensesList(props) {
  // selectedyearhandler
  const [year, setYear] = useState("2022");
  const selectedYearHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter year={year} onSelectedYear={selectedYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesContent expenses={filteredExpenses} />
      </Card>
    </div>
  );
}
