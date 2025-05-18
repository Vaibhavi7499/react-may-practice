import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
initialState: ["Kishor"],

  reducers: {
    accessUser:(state)=>{
      return state
    },
    addUser:(state,action)=>{
      return [...state, action.payload]
    }
  },
});

export const {accessUser,addUser} = userSlice.actions;
export default userSlice.reducer;
