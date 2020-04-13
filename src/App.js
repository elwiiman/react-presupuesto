import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

function App() {
  //state definition
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  //effect to update the remaining
  useEffect(() => {
    if (createExpense) {
      //add new expense
      setExpenses([...expenses, expense]);

      //substract of the current budget

      setRemaining(remainBudget(remaining, expense));

      setCreateExpense(false);
    }
  }, [expense, expenses, createExpense, remaining]);

  const remainBudget = (remain, expense) => {
    return remain - expense.quantity;
  };

  return (
    <div className="container">
      <header>
        <h1>Week Budget</h1>;
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
