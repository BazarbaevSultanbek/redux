import { createSlice } from '@reduxjs/toolkit';

export const dragReducer = createSlice({
    name: 'tasks',
    initialState: {
        title: 'tasks',
        tasks: [
            {
                task: 'Go to the gym!',
                id: 1,
                status: 'incomplete'
            },
            {
                task: 'Have breakfast',
                id: 2,
                status: 'completed'
            },
            {
                task: 'Go to the University',
                id: 3,
                status: 'in progress'
            },
            {
                task: 'Eat Lunch',
                id: 4,
                status: 'in progress'
            },
            {
                task: 'Sleep 2 hours',
                id: 3,
                status: 'incomplete'
            }

        ]
    },
    reducers: {
    },
});

export const { } = dragReducer.actions;
export default dragReducer.reducer;

