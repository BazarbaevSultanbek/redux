import { createSlice } from '@reduxjs/toolkit'

export const listReducer = createSlice({
    name: 'todos',
    initialState: {
        title: 'todos',
        todos: [
            {
                text: 'QWERTY',
                status: 'in progress',
                date: "2024-05-30",
                id: 762212
            },
            {
                text: 'Hello World!',
                status: 'completed',
                date: "2024-04-30",
                id: 712631
            },
            {
                text: 'Yoruwa',
                status: 'incomplete',
                date: "2024-03-30",
                id: 713631
            }
        ],
    },
    reducers: {
        addTodos(state, action) {
            state.todos = [
                ...state.todos,
                {
                    text: action.payload.text,
                    date: action.payload.date,
                    status: 'in progress',
                    id: Math.floor(Math.random() * 1000000),
                },
            ];
        },
        updateStatus(state, action) {
            state.todos = state.todos.map((item) => item.id == action.payload.id ? { ...item, status: action.payload.status } : item)
        },
    },
})



export const { addTodos, editTodos, deleteTodos, updateStatus } = listReducer.actions
export default listReducer.reducer