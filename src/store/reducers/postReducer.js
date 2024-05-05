import { createSlice } from '@reduxjs/toolkit';
import mountain from '../../photos/mountain.jpg'
import messi from '../../photos/messi.jpg'
import egg from '../../photos/egg.jpg'

export const postReducer = createSlice({
    name: 'posts',
    initialState: {
        title: 'posts',
        posts: [
            {
                title: 'Mountain',
                text:'Tantas veces lo soñé, tanto lo deseaba que aún no caigo, no me lo puedo creer……',
                img: mountain,
                id: 892323,
                comment: ''
            },
            {
                title: "CAMPEONES DEL MUNDO!!!!!!!",
                text:'Tantas veces lo soñé, tanto lo deseaba que aún no caigo, no me lo puedo creer……',
                img: messi,
                id: 998231,
                comment: ''
            },
            {
                title: "Let’s set a world record together ",
                text:'Let’s set a world record together and get the most liked post on Instagram. Beating the current world record held by Kylie Jenner (18 million)! We got this',
                img: egg,
                id: 643321,
                comment: ''
            },
        ]
    },
    reducers: {},
});

export const { addPost } = postReducer.actions;
export default postReducer.reducer;

