import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Posts.scss'

function Posts() {
    const posts = useSelector(state => state?.posts.posts)
    const dispatch = useDispatch()


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
                                    <button>Add comment...</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;