import { useState } from "react";

function App() {
  const [numeros, setNumeros] = useState([]);

  
  function addNumber(){
    setNumeros([...numeros, numeros.length]);
  }

  return (
    <div>
      <h1>Hook</h1>
      <button onClick={addNumber}>Clique</button>
      <ul>
        {numeros.map((numero, index) => (
          <li key={index}>O item {numero} foi adicionado a lista!</li>
        ))}
      </ul>
    </div>
  );

}
export default App;