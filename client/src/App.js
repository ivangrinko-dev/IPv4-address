import axios from "axios";
import { useState } from "react";

function App() {
  const [object, setObject] = useState("");
  async function show() {
    const response = await axios.get("https://api.ipify.org/?format=json");
    console.log(response.data);
    setObject(response.data.ip)
  }

  return (
    <div className="App">
      <h1>{object}</h1>
      <button onClick={show}>Click</button>
    </div>
  );
}

export default App;
