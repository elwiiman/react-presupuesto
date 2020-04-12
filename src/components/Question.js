import React, { Fragment } from "react";

const Question = () => {
  return (
    <Fragment>
      <h2>Put your budget</h2>

      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Type your budget"
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

export default Question;
