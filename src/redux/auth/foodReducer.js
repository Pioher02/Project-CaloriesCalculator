// redux/auth/foodReducer.js
import { createSlice } from '@reduxjs/toolkit';

const foodSlice = createSlice({
    name: 'food',
    initialState: [],
    reducers: {
        setFoods: (state, action) => {
            // Actualiza el estado con los alimentos obtenidos del servidor
            return action.payload;
        },
    },
});

export const { setFoods } = foodSlice.actions;

export default foodSlice.reducer;