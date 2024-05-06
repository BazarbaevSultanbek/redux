import { createSlice } from '@reduxjs/toolkit';

export const formReducer = createSlice({
    name: 'users',
    initialState: {
        title: 'users',
        users: [
            {
                email: 'admin@gmail.com',
                username: 'admin',
                password: 'admin',
                id: 788921,
            }
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

export const { addComment } = formReducer.actions;
export default formReducer.reducer;

