import { Button, DatePicker, Input } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Todo.scss';
import { addTodos, updateStatus } from '../../store/reducers/listReducer';

function Todo() {
    const todos = useSelector(state => state?.todos.todos);
    const dispatch = useDispatch()
    const [text, setText] = useState('');
    const [date, setDate] = useState('');

    const getDate = (date, dateString) => {
        setDate(dateString);
    };
    const addTodo = () => {
        dispatch(addTodos({ text: text, date: date }))
    }

    const updateTodoStatus = (id, status) => {
        let newStatus;
        if (status === 'in progress') {
            newStatus = 'completed';
        } else if (status === 'completed') {
            newStatus = 'incomplete';
        } else if (status === 'incomplete') {
            newStatus = 'in progress';
        }
        dispatch(updateStatus({ id: id, status: newStatus }));
    }

    return (
        <div className='Todo'>
            <div className="container">
                <div className="Todo-block">
                    <div className="Todo-block-add">
                        <Input placeholder="Add Task" onChange={(e) => setText(e.target.value)} />
                        <DatePicker onChange={getDate} />
                        <Button type="primary" onClick={() => addTodo()}>Add Task</Button>
                    </div>
                    <div className="Todo-block-list">
                        <ul>
                            {todos.map((item) => (
                                <li key={item.id} className='Todo-block-list-item'>
                                    <p>{item.text}</p>
                                    <p>{item.date}</p>
                                    {item.status === 'in progress' ? (
                                        <i className="fa-regular fa-clock" onClick={() => updateTodoStatus(item.id, item.status)}></i>
                                    ) : item.status === 'completed' ? (
                                        <i className="fa-solid fa-circle-check" onClick={() => updateTodoStatus(item.id, item.status)}></i>
                                    ) : (
                                        <i className="fa-solid fa-circle-xmark" onClick={() => updateTodoStatus(item.id, item.status)}></i>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>  
                </div>
            </div>
        </div >
    )
}

export default Todo;
