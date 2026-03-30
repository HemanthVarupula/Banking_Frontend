import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null, // { _id, firstName, balance, etc. }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload; // set logged-in user
    },
    updateBalance: (state, action) => {
      if (state.userInfo) {
        state.userInfo.balance += action.payload; // deposit amount
      }
    },
    withdrawAmount:(state,action)=>{
      if(state.userInfo){
        state.userInfo.balance -= action.payload;
      }
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setUser, updateBalance, logout ,withdrawAmount} = userSlice.actions;
export default userSlice.reducer;