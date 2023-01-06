import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, { payload }) => {
      state.basket = [...(state.basket.filter((item)=>item.id!==payload.id)), payload];
      localStorage.setItem("basket",JSON.stringify(state.basket))
    },
    removeBasket: (state, { payload }) => {
      state.basket = [...(state.basket.filter((item)=>item.id!==payload.id))];
      localStorage.setItem("basket",JSON.stringify(state.basket))
    },
    clearBasket:(state,{payload})=>{
      state.basket=[]
    }
  },
});

export const {addBasket,removeBasket,clearBasket} = basketSlice.actions;

export default basketSlice.reducer;
