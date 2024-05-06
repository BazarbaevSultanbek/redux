import { createSlice } from '@reduxjs/toolkit';
import mountain from '../../photos/mountain.jpg'
import messi from '../../photos/messi.jpg'
import egg from '../../photos/egg.jpg'
import { comment } from 'postcss';

export const postReducer = createSlice({
    name: 'posts',
    initialState: {
        title: 'posts',
        posts: [
            {
                title: 'Mountain',
                text: 'Tantas veces lo soñé, tanto lo deseaba que aún no caigo, no me lo puedo creer……',
                img: mountain,
                id: 892323,
                comment: [
                    {
                        text: "Beatiful",
                        id: 128761
                    }
                ]
            },
            {
                title: "CAMPEONES DEL MUNDO!!!!!!!",
                text: 'Tantas veces lo soñé, tanto lo deseaba que aún no caigo, no me lo puedo creer……',
                img: messi,
                id: 998231,
                comment: [
                    {
                        text: "Suiiii",
                        id: 128761
                    }
                ]
            },
            {
                title: "Let’s set a world record together ",
                text: 'Let’s set a world record together and get the most liked post on Instagram',
                img: egg,
                id: 643321,
                comment: [
                    {
                        text: "That's cool",
                        id: 128761
                    }
                ]
            },
        ]
    },
    reducers: {
        addComment(state, action) {
            state.posts = state.posts.map(item => item.id === action.payload.id ?
                {
                    ...item,
                    comment: [
                        ...item.comment,
                        {
                            text: action.payload.comment,
                            id: Math.floor(Math.random() * 1000000)
                        }
                    ]
                } : item
            )
        }
    },
});

export const { addComment } = postReducer.actions;
export default postReducer.reducer;

