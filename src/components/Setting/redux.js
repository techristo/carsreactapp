import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    model: "",
    engine: "",
    gearbox: "",
    color: ""
  },
  reducers: {
    updateSetting: (state, action) => {
      const { type, value } = action.payload;

      state[type] = value;
    }
  }
});

// Action creators are generated for each case reducer function
export const { updateSetting } = settingSlice.actions;

export default settingSlice.reducer;
