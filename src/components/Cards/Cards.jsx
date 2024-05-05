import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cards.scss';
import { Button, Input, Select, Typography } from 'antd';
import { addCards, deleteCards, editCards } from '../../store/reducers/cardReducer';

function Cards() {
  const cards = useSelector(state => state.cards);
  const colors = useSelector(state => state?.cards.colors);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [colorValue, setColorValue] = useState("rgb(0, 255, 119)");
  const [showModule, setShowModule] = useState(false);
  const [selectedCard, setSelectedCard] = useState('')

  const handleaddCard = () => {
    dispatch(addCards({ text: text, color: colorValue }));
  }

  const handleValue = (value) => {
    setColorValue(value);
  }

  const EditModule = (color, value, id) => {
    setShowModule(true)
    setSelectedCard({
      id: id,
      color: color,
      text: value
    });
  }

  return (
    <div className='Cards'>
      <div className="container">
        <div className="Cards-block">
          <Typography.Title level={5}>Add Card</Typography.Title>
          <div className="Cards-block-add">
            <Input count={{ show: true, max: 200, }} style={{ width: '750px' }} placeholder='Add Task' onChange={(e) => setText(e.target.value)} />
            <Select defaultValue="rgb(0, 255, 119)" style={{ width: 120, }} onChange={handleValue} options={colors.map((item) => ({ value: item, label: item, }))} />
            <Button type="primary" onClick={handleaddCard}>Primary Button</Button>
          </div>
          <div className="Cards-block-list">
            {
              cards?.cards.map((item) => (
                <div className='Cards-block-list-item' key={item.id} id={item.id} style={{ backgroundColor: item.color }}>
                  <div>
                    <button onClick={() => EditModule(item.color, item.text, item.id)}>
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>


                    <button onClick={() => dispatch(deleteCards({ id: item.id }))}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="Card-module" style={{ display: showModule ? 'block' : 'none' }}>
          <div className="Card-module-inner">
            <div className="Card-module-inner-items">
              <div className="Card-inner-items-colors">
                {
                  colors.map((item) => (
                    <span
                      key={item}
                      style={{
                        background: item,
                        width: '15px',
                        height: '15px',
                        display: 'block',
                        border: selectedCard.color === item ? '1px solid black' : 'none',
                        cursor: 'pointer'
                      }}
                      onClick={() => setSelectedCard({ ...selectedCard, color: item, })}></span>
                  ))
                }
              </div>
              <textarea value={selectedCard.text} onChange={(e) => setSelectedCard({
                ...selectedCard,
                text: e.target.value,
              })}></textarea>

              <div className="Card-inner-items-btn">
                <Button onClick={() => setShowModule(false)}>Cancel</Button>
                <Button type="primary" onClick={() => {
                  dispatch(editCards({ id: selectedCard.id, item: selectedCard }));
                  setShowModule(false)
                }
                }>OK</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards;
