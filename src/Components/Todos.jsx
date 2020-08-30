import React from 'react'
import Todo from './Todo'

import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    display: grid;
    grid-gap: 15px;
`

const Nothing = styled.div`
    text-align: center; 
    font-size: 18px;
`

const Todos = ({setTodos, todos, filtroTodos}) => {

     
    return ( 
        <Container> 
            
            {filtroTodos.length ? filtroTodos.map(todo => (
                <Todo 
                    key={todo.id}
                    todo={todo}
                    setTodos={setTodos}
                    todos={todos}
                />
            )) : <Nothing className="completed">// Nothing</Nothing> }

            
        </Container>
     );
}
 
export default Todos;