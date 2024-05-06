import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Posts.scss'
import { Input } from 'antd';
import { addComment } from '../../store/reducers/postReducer';


function Posts() {
    const posts = useSelector(state => state?.posts.posts)
    const dispatch = useDispatch()
    const [showIn, setShowIn] = useState(null)
    const [showModule, setshowModule] = useState(false)
    const [text, setText] = useState('')
    const [id, setId] = useState(null)

    const toggleCommentSection = (postId) => {
        setShowIn(showIn === postId ? null : postId);
    }

    posts.map(item => item.comment.map((e) => console.log(e.text)))


    return (
        <div className='Posts'>
            <div className="container">
                <div className="Posts-block">
                    <div className="Posts-block-list">
                        {
                            posts.map(item => (
                                <div className="Posts-block-list-item" key={item.id}>
                                    <img src={item.img} alt={item.title} />
                                    <div className="Posts-list-item-text">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                        <div className='comments'>
                                            <ul>
                                                {
                                                    item.comment.map((e) => (
                                                        <li>{e.text}</li>
                                                    ))
                                                }
                                            </ul>
                                            <span onClick={() => { setId(item.id); setshowModule(true) }}>View comments</span>
                                        </div>
                                        <button onClick={() => toggleCommentSection(item.id)}>Add comment...</button>
                                    </div>

                                    <div style={{ display: showIn === item.id ? 'block' : 'none' }} >
                                        <div className='Post-block-list-navi'>
                                            <Input placeholder="Type comment..." value={text} onChange={(e) => setText(e.target.value)} />
                                            <button onClick={() => { dispatch(addComment({ id: item.id, comment: text })); setText('') }}>Post</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="Post-module" style={{ display: showModule ? 'block' : 'none' }}>
                    <div className="Post-module-inner">
                        <button id='cancel' onClick={() => setshowModule(false)}>X</button>
                        <div className="Post-module-inner-items">
                            <ul>
                                {
                                    posts.map(item => item.id === id ? (
                                        item.comment.map((e, index) => (
                                            <li>
                                                <div>
                                                    <h3>User {index + 1}</h3>
                                                    <span>
                                                        {e.text}
                                                    </span>
                                                </div>
                                                <span>{index + 2} w</span>
                                            </li>
                                        ))
                                    ) : null)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;
