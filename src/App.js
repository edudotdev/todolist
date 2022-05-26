import React, {useState, useEffect} from 'react';
import Form from './Components/Form'
import Todos from './Components/Todos'

import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  display: grid;
  grid-gap: 20px;

  @media only screen and (max-width: 600px) {
    grid-gap: 15px;
    border: none;
    padding: 0;
  } 

`

const Header = styled.header`
  h1 {
    @media only screen and (max-width: 600px) {
      font-size: 25px;
    } 
  }
`

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [filtro, setFiltro] = useState("all")
  const [filtroTodos, setFiltroTodos] = useState([]) 

  useEffect(() => { 
    getLocalStorage()
  }, [])

  useEffect(() => {

    const handleFilter = () => {
      if(filtro === 'active') {
        setFiltroTodos(todos.filter((todo) => todo.completed === false))
      }else if(filtro === 'completed') {
        setFiltroTodos(todos.filter((todo) => todo.completed === true))
      }else {
        setFiltroTodos(todos) 
      }
    } 

    handleFilter()  
    saveLocalStorage()

  }, [filtro, todos])

  const saveLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalStorage = () => {
    if(localStorage.getItem('todos')) {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }else {
      localStorage.setItem('todos', JSON.stringify([]))
    }
  }

  return (
    <div className='wrapper_container'>
      <Container>
        <Header>
          <h1>Todos</h1>
        </Header>

        <Form 
          setInputText={setInputText}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
          setFiltro={setFiltro} 
          />
        <Todos 
          setTodos={setTodos}
          todos={todos}
          setFiltroTodos={setFiltroTodos}
          filtroTodos={filtroTodos} 
          />
      </Container>
    </div>
  );
}

export default App;
