import { useState } from 'react'


function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [pokemon, setPokemon] = useState("");

  const [userList, setUserList] = useState([]);

  const addUserList = () => {
    const newUser = {
      name: nome,
      age: idade,
      pokemon: pokemon
    }

    setUserList([...userList, newUser])
    setNome("");
    setIdade("");
    setPokemon("");
  }



  return (

    <div>
      <h1>Mestres pokemon</h1>

      <form>
        <input 
        type="text" value={nome} placeholder={"Nome do treinador"} onChange={(event) => 
        setNome(event.target.value)}>
        </input>
        <input 
        type="text" value={idade} placeholder={"Idade"} onChange={(event) => 
        setIdade(event.target.value)}>
        </input>
        <input 
        type="text" value={pokemon} placeholder={"Seu Pokemon favorito"} onChange={(event) =>
         setPokemon(event.target.value)}>
         </input>
        <input type="button" value="" onClick={addUserList} />
      </form>
      <h2>Mestres cadastrados:</h2>
      <ul>
        {userList.map((item, index) => (<li key={index}>{item.name} - {item.age} anos - {item.pokemon}</li>))}
      </ul>
    </div>


  )
}

export default App