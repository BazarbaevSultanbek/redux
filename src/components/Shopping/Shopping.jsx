import { Button, FloatButton } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Shopping.scss'
import { AddtoCart, Decrement, Increment } from '../../store/reducers/shopReducer';

function Shopping() {
    const clothes = useSelector(state => state?.clothes.clothes)
    const card = useSelector(state => state?.clothes.card)
    const total = useSelector(state => state?.clothes.total)
    const dispatch = useDispatch()
    const [showModule, setshowModule] = useState(false)


    return (
        <div className='Shopping'>
            <div className="container">
                <div className="Shopping-block">
                    <div className="Shopping-block-total">
                        <FloatButton tooltip={<div>Card</div>} icon={<i className="fa-solid fa-cart-shopping" style={{ color: "blue", outline: 'none' }}></i>} onClick={() => setshowModule(true)} />
                    </div>
                    <div className="Shopping-block-list">
                        {
                            clothes.map((item) => (
                                <div className='Shopping-block-list-item' key={item.id}>
                                    <img src={item.photo} alt={item.name} />
                                    <div>
                                        <p>{item.name}</p>
                                        <p>US${item.price}</p>
                                    </div>
                                    <span>{item.desc}</span>
                                    <div>
                                        <Button type="primary" onClick={() => dispatch(AddtoCart({ id: item.id, item: item }))}>Add {item.name} +</Button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="Shopping-module" style={{ display: showModule ? 'block' : 'none' }}>
                    <div className="Shopping-module-inner">
                        <button id='cancel' onClick={() => setshowModule(false)}>X</button>
                        <div className="Shopping-module-inner-items">
                            <h3>Your Cart</h3>
                            <p id='total'>Total: <span>US${total}</span> </p>
                            <ul>
                                {
                                    card.map((item) => (
                                        <li className='Shopping-inner-items-li' key={item.id}>
                                            <p>{item.name}</p>
                                            <div>
                                                <Button type="primary" onClick={() => dispatch(Increment({ id: item.id, price: item.price }))}>+</Button>
                                                <span>{item.count}</span>
                                                <Button type="primary" onClick={() => dispatch(Decrement({ id: item.id, price: item.price }))}>-</Button>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shopping