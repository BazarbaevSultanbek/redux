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
                img: mountain,
                id: 892323,
                comment: ''
            },
            {
                title: "CAMPEONES DEL MUNDO!!!!!!!",
                img: messi,
                id: 998231,
                comment: ''
            },
            {
                title: "Let’s set a world record together ",
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

