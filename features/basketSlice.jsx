import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, { payload }) => {
      state.basket = [...state, payload];
      localStorage.setItem("basket",JSON.stringify("state.basket"))
    },
    removeBasket: (state, { payload }) => {
      state.basket = [...(state.map((item)=>item.id!==payload.id))];
      localStorage.setItem("basket",JSON.stringify("state.basket"))
    },
  },
});

export const {addBasket,removeBasket} = basketSlice.actions;

export default basketSlice.reducer;
