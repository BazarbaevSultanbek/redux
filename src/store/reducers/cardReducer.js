import { createSlice } from '@reduxjs/toolkit'

export const cardReducer = createSlice({
    name: 'cards',
    initialState: {
        name: 'cards',
        colors: [
            'rgb(0, 255, 119)',
            'rgb(5, 140, 218)',
            'rgb(171, 31, 241)',
            'rgb(254, 56, 155)',
            'rgb(143, 255, 52)',
            'rgb(255, 204, 36)',
            'rgb(243, 69, 69)',
        ],
        cards: [
            {
                text: 'QWERTY',
                color: 'rgb(0, 255, 119)',
                id: 762212
            },
            {
                text: 'Hello World!',
                color: 'rgb(5, 140, 218)',
                id: 712631
            }
        ],
    },
    reducers: {
        addCards(state, action) {
            state.cards = [
                ...state.cards,
                {
                    text: action.payload.text,
                    color: action.payload.color,
                    id: Math.floor(Math.random() * 1000000),
                },
            ];
        },
        editCards(state, action) {
            state.cards = state.cards.map((item) => item.id == action.payload.id ? action.payload.item : item)
        },
        deleteCards(state, action) {
            state.cards = state.cards.filter((item) => item.id !== action.payload.id)
        }

    },
})

export const { addCards, editCards, deleteCards } = cardReducer.actions
export default cardReducer.reducer