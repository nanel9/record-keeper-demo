import { createSlice } from "@reduxjs/toolkit";

const withdrawalSlice = createSlice({
  name: "withdrawal",
  initialState : {
    withdrawalReason: null,
    withdrawalType: null,
    withdrawalAssets: null,
    primaryBeneficiaries: [],
    contingentBeneficiaries: [],
  },
  reducers: {
    setWithdrawalReason: (state, action) => {
      const { withdrawalReason } = action.payload;
      state.withdrawalReason = withdrawalReason;
    },
    setWithdrawalType: (state, action) => {
      const { withdrawalType } = action.payload;
      state.withdrawalType = withdrawalType;
    },
    setWithdrawalAssets: (state, action) => {
      const { withdrawalAssets } = action.payload;
      state.withdrawalAssets = withdrawalAssets;
    },
    setPrimaryBeneficiaries: (state, action) => {
      const { beneficiaries } = action.payload;
      state.primaryBeneficiaries = beneficiaries;
    },
    setContingentBeneficiaries: (state, action) => {
      const { beneficiaries } = action.payload;
      state.contingentBeneficiaries = beneficiaries;
    },
    resetWithdrawal: (state) => {
      state.withdrawalReason = null;
      state.withdrawalType = null;    
      state.withdrawalAssets = null;
      state.primaryBeneficiaries = [];
      state.contingentBeneficiaries = [];
    },
  }
});

export const { setWithdrawalReason, setWithdrawalType, setWithdrawalAssets, setPrimaryBeneficiaries, setContingentBeneficiaries, resetWithdrawal } = withdrawalSlice.actions;

export default withdrawalSlice.reducer;