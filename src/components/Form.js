import React, { useState } from "react";
import Error from "./Error";
import uuid from "uuid/v4";
import PropTypes from "prop-types";

const Form = ({ setExpense, setCreateExpense }) => {
  const [expenseName, setExpenseName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  // function to add an expense

  const addExpense = (e) => {
    e.preventDefault();

    //Validation
    if (quantity < 1 || isNaN(quantity) || expenseName.trim() === "") {
      setError(true);
      return;
    }
    //If validation is ok
    setError(false);

    //build the expense
    const expense = {
      expenseName,
      quantity,
      id: uuid(),
    };

    //pass the expense to the main component
    setExpense(expense);
    setCreateExpense(true);

    //reset form
    setExpenseName("");
    setQuantity(0);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Add your expenses here:</h2>

      {error ? <Error message={"The is an error"} /> : null}

      <div className="campo">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ex. Transport"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />

        <label>Expense quantity</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ex. 300"
          value={parseInt(quantity, 10)}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add Expense"
      />
    </form>
  );
};

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired,
};

export default Form;
