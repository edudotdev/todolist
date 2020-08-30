import React from 'react'

import styled from 'styled-components'

const Task = styled.div`
    display: grid;
    grid-template-columns: 1fr 40px 40px;
    grid-gap: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;

        @media only screen and (max-width: 600px) {
            grid-template-columns: 1fr 35px 35px;
        } 

    span {
        font-size: 18px;
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
    font-size: 18px;
    width: 40px;
    line-height: 40px;
    max-height: 40px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    outline: none;
    transition: all .4s ease; 

    &&:hover {
        transform: translateX(-1px) translateY(-1px); 
    }

    @media only screen and (max-width: 600px) {
        width: 35px;
        line-height: 35px;
        max-height: 35px;
        font-size: 14px;
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
            <ButtonsTasks onClick={HandleCompleted} className={`btnCompleted ${completed ? 'grayscale' : null}`}><i className="fas fa-check"></i></ButtonsTasks>
            <ButtonsTasks onClick={HandleDelete} className="btnTrash"><i className="far fa-trash-alt"></i></ButtonsTasks>
        </Task>
     );
}
 
export default Todo;