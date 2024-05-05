import { createSlice } from '@reduxjs/toolkit'


import Blackshoes from '../../photos/Blackshoes.png'
import cap from '../../photos/cap.png'
import hoodie from '../../photos/hoodie.jpg'
import socks from '../../photos/socks.jpeg'
import trousers from '../../photos/trousers.jpg'
import tshirt from '../../photos/tshirt.jpg'
import whitetrouser from '../../photos/whitetrouser.jpg'



export const shopReducer = createSlice({
    name: 'clothes',
    initialState: {
        title: 'clothes',
        clothes: [
            {
                photo: Blackshoes,
                name: 'Blackshoes',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                price: 42,
                id: 762212,
                count: 0,
            },
            {
                photo: cap,
                name: 'cap',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                price: 12,
                id: 982342,
                count: 0,
            },
            {
                photo: hoodie,
                name: 'hoodie',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                price: 83,
                id: 982375,
            },
            {
                photo: socks,
                name: 'socks',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                price: 5,
                id: 982734,
                count: 0,
            },

            {
                photo: trousers,
                name: 'trousers',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                price: 93,
                id: 893920,
                count: 0,
            },
            {
                photo: tshirt,
                name: 'T-shirt',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                price: 60,
                id: 829340,
                count: 0,
            },
            {
                photo: whitetrouser,
                name: 'White Trouser',
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
                price: 120,
                id: 234232,
                count: 0,
            },
        ],
        card: [],
        total: 0,
    },
    reducers: {
        AddtoCart(state, action) {
            const existedItem = state.card.find(item => item.id === action.payload.item.id);
            if (!existedItem) {
                state.card.push({
                    photo: action.payload.item.photo,
                    name: action.payload.item.name,
                    id: action.payload.item.id,
                    count: 1,
                    price: action.payload.item.price,
                }),
                    state.total += action.payload.item.price
            } else {
                existedItem.count++;
                state.total += action.payload.item.price
            }
        },
        Increment(state, action) {
            state.card = state.card.map(item => item.id === action.payload.id ? { ...item, count: item.count + 1 } : item);
            state.total += action.payload.price
        },
        Decrement(state, action) {
            const item = state.card.find(item => item.id === action.payload.id);
            if (item && item.count > 0) {
                item.count--;
                state.total -= action.payload.price;
            }
        },


    },
})



export const { AddtoCart, Increment, Decrement } = shopReducer.actions
export default shopReducer.reducer