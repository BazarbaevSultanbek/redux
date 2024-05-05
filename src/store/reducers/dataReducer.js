import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
});
export const dataReducer = createSlice({
    name: 'data',
    reducers: {},
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        [fetchData.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [fetchData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
})



// export const { } = dataReducer.actions
export default dataReducer.reducer