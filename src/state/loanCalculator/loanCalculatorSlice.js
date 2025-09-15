import { createSlice } from "@reduxjs/toolkit";

const loanCalculatorSlice = createSlice({
  name: "loanCalculator",
  initialState : {
    calculatorResults : { 
      loanType: "Personal",
      paymentFrequency: "Weekly",
      loanAmount: '0',
      numberOfPayments: 0,
      paymentAmount: 0,
      deliveryFee: '0',
    }
  },
  reducers: {
    setCalculatorResult: (state, action) => {
      const { loanType, paymentFrequency, loanAmount, numberOfPayments, paymentAmount } = action.payload;
      state.calculatorResults = { ...state.calculatorResults,loanType, paymentFrequency, loanAmount, numberOfPayments, paymentAmount };
    },
    setDeliveryFee: (state, action) => {
      const { deliveryFee } = action.payload;
      state.calculatorResults.deliveryFee = deliveryFee;
    },
    resetCalculatorResult: (state) => {
      state.calculatorResults = { 
        loanType: "Personal",
        paymentFrequency: "Weekly",
        loanAmount: '0',
        numberOfPayments: 0,
        paymentAmount: 0,
        deliveryFee: '0',
      };
    },
  }
});

export const { setCalculatorResult, resetCalculatorResult, setDeliveryFee } = loanCalculatorSlice.actions;

export default loanCalculatorSlice.reducer;