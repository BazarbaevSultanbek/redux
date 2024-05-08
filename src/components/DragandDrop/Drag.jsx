import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Reorder } from 'framer-motion'
import './Drag.scss'
import { updateTasksOrder } from '../../store/reducers/dragReducer'

function Drag() {
    const tasks = useSelector(state => state?.drags.tasks)
    const [items, setItems] = useState(tasks)
    const dispatch = useDispatch()

    const onReorder = (startIndex, endIndex) => {
        const reorderedTasks = Array.from(tasks)
        const [removed] = reorderedTasks.splice(startIndex, 1)
        reorderedTasks.splice(endIndex, 0, removed)
        setItems(reorderedTasks) // Update local state
        dispatch(updateTasksOrder(reorderedTasks)) // Update Redux store
    }


    return (
        <div className='Drag'>
            <div className="container">
                <div className="Drag-block">
                    <div className="Drag-block-inner">
                        <Reorder.Group values={items} onReorder={onReorder}>
                            <div className="Drag-block-inner-completed">
                                <h2>Completed tasks</h2>
                                {items.map((item) => {
                                    if (item.status === 'completed') {
                                        return (
                                            <Reorder.Item value={item} key={item.id}>
                                                <div key={item.id} data={item.id}>
                                                    <p>{item.task}</p>
                                                    <i className="fa-solid fa-circle-check"></i>
                                                </div>
                                            </Reorder.Item>
                                        )
                                    }
                                })}
                            </div>
                            <div className="Drag-block-inner-incomplete">
                                <h2>Incompleted tasks</h2>
                                {items.map((item) => {
                                    if (item.status === 'incomplete') {
                                        return (
                                            <Reorder.Item value={item} key={item.id}>
                                                <div key={item.id} data={item.id}>
                                                    <p>{item.task}</p>
                                                    <i className="fa-solid fa-circle-xmark"></i>
                                                </div>
                                            </Reorder.Item>
                                        )
                                    }
                                })}
                            </div>
                            <div className="Drag-block-inner-progress">
                                <h2>In Progress tasks</h2>
                                {items.map((item) => {
                                    if (item.status === 'in progress') {
                                        return (
                                            <Reorder.Item value={item} key={item.id}>
                                                <div key={item.id} data={item.id}>
                                                    <p>{item.task}</p>
                                                    <i className="fa-solid fa-clock"></i>
                                                </div>
                                            </Reorder.Item>
                                        )
                                    }
                                })}
                            </div>
                        </Reorder.Group>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drag
