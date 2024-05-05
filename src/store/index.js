import { configureStore } from '@reduxjs/toolkit';
import { cardReducer } from './reducers/cardReducer';
import { listReducer } from './reducers/listReducer';
import { shopReducer } from './reducers/shopReducer';
import { dataReducer } from './reducers/dataReducer';
import { postReducer } from './reducers/postReducer';
export const store = configureStore({
    reducer: {
        cards: cardReducer.reducer,
        todos: listReducer.reducer,
        clothes: shopReducer.reducer,
        data: dataReducer.reducer,
        posts: postReducer.reducer,
    },
}); 