import React from 'react'

import styled from 'styled-components'

const Task = styled.div`
    display: grid;
    grid-template-columns: 1fr 40px 40px;
    grid-gap: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;

        @media only screen and (max-width: 600px) {
            grid-template-columns: 1fr 30px 30px;
        } 

    span {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: all .3s ease;

            @media only screen and (max-width: 600px) {
                font-size: 15px;
            } 
    }

`

const ButtonsTasks = styled.button`
    border: none;
    border-radius: 5px;
    width: 40px;
    line-height: 40px;
    max-height: 40px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    outline: none;
    transition: all .4s ease; 
    padding: 8px 2px 2px 5px;

    &&:hover {
        transform: translateX(-1px) translateY(-1px); 
    }

    @media only screen and (max-width: 600px) {
        width: 35px;
        line-height: 35px;
    } 
`

const Todo = ({setTodos, todos, todo}) => {

    const {text, completed, id} = todo

    const HandleDelete = () => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const HandleCompleted = () => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }

    return ( 
        <Task>
            <span className={completed ? 'completed' : null}>{text}</span> 
            <ButtonsTasks onClick={HandleCompleted} className={`btnCompleted ${completed ? 'grayscale' : null}`}><svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></ButtonsTasks>
            <ButtonsTasks onClick={HandleDelete} className="btnTrash"><svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></ButtonsTasks>
        </Task>
     );
}
 
export default Todo;