import React from 'react'
import styled from 'styled-components';

const Buscador = styled.input`
    padding: 10px 15px;
    font-family: 'Quicksand', sans-serif;
    font-size: 22px;
    border: 1px solid #ccc;
    border-radius: 5px;

    @media only screen and (max-width: 600px) {
      font-size: 20px;
      padding: 10px;
    } 
`

const Forms = styled.form`
    display: grid;
    grid-template-columns: 1fr .3fr;
    grid-gap: 20px;

        @media only screen and (max-width: 600px) {
            grid-gap: 10px;
        }

`

const Select = styled.select`
    font-family: 'Quicksand', sans-serif;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;

        @media only screen and (max-width: 600px) {
            padding: 5px;
        }

`

const Form = ({setInputText, inputText, setTodos, todos, setFiltro}) => {
 

    const handleInputText = e =>  {
        setInputText(e.target.value)
         
    }

    const handleTodoSubmit = e => {
        e.preventDefault()

        if(inputText.trim() === '') {
            return
        }
    
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: new Date().getTime()}
        ])
        setInputText("")
    }

    const handleSelection = e => {
        setFiltro(e.target.value)
    }

    return ( 
        <Forms onSubmit={handleTodoSubmit} >
            <Buscador 
                onChange={handleInputText}
                type="text" 
                maxLength="50"
                placeholder="Whats needs to be done?"
                value={inputText}
            />
            <Select name="" onChange={handleSelection}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option> 
            </Select>
            
        </Forms>
     );
}
 
export default Form;