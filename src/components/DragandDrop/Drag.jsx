import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Drag.scss'

function Drag() {
    const tasks = useSelector(state => state?.drags.tasks)
    const dispatch = useDispatch()
    return (
        <div className='Drag'>
            <div className="container">
                <div className="Drag-block">
                    <div className="Drag-block-inner">
                        <div className="Drag-block-inner-completed">
                            <h2>Completed tasks</h2>
                            {
                                tasks.map((item) => {
                                    if (item.status === 'completed') {
                                        return (
                                            <div>
                                                <p>{item.task}</p>
                                                {item.status === 'in progress' ? (
                                                    <i className="fa-regular fa-clock"></i>
                                                ) : item.status === 'completed' ? (
                                                    <i className="fa-solid fa-circle-check"></i>
                                                ) : (
                                                    <i className="fa-solid fa-circle-xmark"></i>
                                                )}
                                            </div>
                                        )
                                    }
                                })
                            }

                        </div>
                        <div className="Drag-block-inner-incomplete">
                            <h2>Incompleted tasks</h2>
                            {
                                tasks.map((item) => {
                                    if (item.status === 'incomplete') {
                                        return (
                                            <div>
                                                <p>{item.task}</p>
                                                {item.status === 'in progress' ? (
                                                    <i className="fa-regular fa-clock"></i>
                                                ) : item.status === 'completed' ? (
                                                    <i className="fa-solid fa-circle-check"></i>
                                                ) : (
                                                    <i className="fa-solid fa-circle-xmark"></i>
                                                )}
                                            </div>
                                        )
                                    }
                                })
                            }

                        </div>
                        <div className="Drag-block-inner-progress">
                            <h2>Incompleted tasks</h2>
                            {
                                tasks.map((item) => {
                                    if (item.status === 'in progress') {
                                        return (
                                            <div>
                                                <p>{item.task}</p>
                                                {item.status === 'in progress' ? (
                                                    <i className="fa-regular fa-clock"></i>
                                                ) : item.status === 'completed' ? (
                                                    <i className="fa-solid fa-circle-check"></i>
                                                ) : (
                                                    <i className="fa-solid fa-circle-xmark"></i>
                                                )}
                                            </div>
                                        )
                                    }
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drag