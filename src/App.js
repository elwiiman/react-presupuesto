import React, { useState } from "react";
import Question from "./components/Question";
import Form from "./components/Form";

function App() {
  //state definition
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

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
                <Form />
              </div>
              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
