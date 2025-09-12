import { createSlice } from "@reduxjs/toolkit";

const wizardSlice = createSlice({
  name: "wizard",
  initialState : {
    activeStep: 0,
    subTitle: ""
  },
  reducers: {
    setActiveStep: (state, action) => {
      const{ value } = action.payload;
      state.activeStep = value;
    },
    setSubTitle: (state, action) => {
      const{ value } = action.payload;
      state.subTitle = value;
    },
    reset: (state) => {
      state.activeStep = 0;
      state.subTitle = "";
    },
  }
});

export const { setActiveStep, setSubTitle, reset } = wizardSlice.actions;

export default wizardSlice.reducer;