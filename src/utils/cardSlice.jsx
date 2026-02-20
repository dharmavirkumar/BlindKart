import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    items:[]
  },
  reducers: {
    addItem:(state,action)=>{
      state.items.push(action.payload)
    },
    removeItem:()=>{},
    clearCart:()=>{}
    
  },
})

// Action creators are generated for each case reducer function
export const { addItem,removeItem,clearCart } = cartSlice.actions

export default cartSlice.reducer