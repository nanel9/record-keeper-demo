import { configureStore } from "@reduxjs/toolkit";
import wizardReducer from "./wizard/wizardSlice";
import savingAccountsReducer from "./savingAccounts/savingAccountsSlice";
import navReducer from "./nav/navSlice";
import loanCalculatorReducer from "./loanCalculator/loanCalculatorSlice";

export const store = configureStore({
  reducer: {
    wizard: wizardReducer,
    savingAccounts: savingAccountsReducer,
    nav: navReducer,
    loanCalculator: loanCalculatorReducer,
  },
});