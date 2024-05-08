import { createSlice } from '@reduxjs/toolkit';

export const dragReducer = createSlice({
    name: 'drags',
    initialState: {
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
                id: 5,
                status: 'incomplete'
            }
        ]
    },
    reducers: {
        updateTaskStatus(state, action) {
            const { taskId, newStatus } = action.payload;
            state.tasks = state.tasks.map(task =>
                task.id === taskId ? { ...task, status: newStatus } : task
            );
        },
        updateTasksOrder(state, action) {
            state.tasks = action.payload;
        }
    },
});

export const { updateTaskStatus, updateTasksOrder } = dragReducer.actions;
export default dragReducer.reducer;