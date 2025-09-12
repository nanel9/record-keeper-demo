import { createSlice } from "@reduxjs/toolkit";
import savingAccounts from "./savingAccountsData";

const savingAccountsSlice = createSlice({
  name: "savingAccounts",
  initialState : savingAccounts,
  reducers: {
    save: (state) => {
      state.push();
    },
  }
});

export const { save } = savingAccountsSlice.actions;

export default savingAccountsSlice.reducer;