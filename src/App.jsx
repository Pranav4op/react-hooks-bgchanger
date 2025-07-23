import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("Green")}>Green</button>
      <button onClick={() => setColor("brown")}>Brown</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("pink")}>Pink</button>
    </>
  );
}

export default App;
