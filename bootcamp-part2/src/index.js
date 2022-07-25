import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

//import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const WarningNotUsed = () => {
  return <h1>Todavia no se ha usado el componente</h1>;
};

const ListOfClicks = ({ clicks }) => {
  return <p>{clicks.join(", ")}</p>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  const handelReset = () => {
    setLeft(0);
    setRight(0);
    setAll([]);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>
        <button onClick={handelReset}>Reset</button>
      </p>

      <p>Click totales {left + right}</p>
      {allClicks.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListOfClicks clicks={allClicks} />
      )}
    </div>
  );
};

root.render(<App />);
