import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      title: "hello world",
      date: new Date("january 25 2019"),
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

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesList expenses={expenses} />;
    </div>
  );
}
export default App;
