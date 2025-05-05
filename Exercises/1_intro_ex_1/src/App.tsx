import { useState } from "react";
import "./App.css";
import { Button, Input } from "./Input";
import { Row } from "./Row";
import { Col } from "./Col";

function App() {
  const [state, setState] = useState<string[]>([]);

  function handleButton() {
    setState((prev) => {
      return [...prev, ""];
    });
  }

  function handleStateChange(index: number, value: string) {
    setState((prev) => {
      prev[index] = value;
      return [...prev];
    });
  }

  return (
    <>
      <Col>
        <Row>
          <p>Input 1</p>
          <input />
        </Row>
        <Row>
          <p>Here is my button</p>
          <button>Click me</button>
        </Row>
      </Col>
      <p>Array length {state.length}</p>
      <Button onClick={handleButton}>Click Me</Button>
      <div className="app-input-container">
        {state.map((str, index) => (
          <Input
            key={`str-${index}`}
            value={str}
            onChange={(value) => handleStateChange(index, value)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
