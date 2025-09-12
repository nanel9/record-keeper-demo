import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState : {
    activeMenuId: "overview",
  },
  reducers: {
    setActiveMenuId: (state, action) => {
      const { id } = action.payload;
      state.activeMenuId = id;
    },
  }
});

export const { setActiveMenuId } = navSlice.actions;

export default navSlice.reducer;