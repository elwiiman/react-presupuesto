import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {
  //Define State

  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  //Function to read input
  const handleInput = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  //function to submit the budget

  const addBudget = (e) => {
    e.preventDefault();

    //Validation

    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }

    // If Validation is ok
    setError(false);
    setBudget(quantity);
    setRemaining(quantity);
    setShowQuestion(false);
  };

  return (
    <Fragment>
      <h2>Put your budget</h2>
      {error ? <Error message={"Budget is incorrect"} /> : null}

      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Type your budget"
          onChange={handleInput}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define budget"
        />
      </form>
    </Fragment>
  );
};

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
};

export default Question;
