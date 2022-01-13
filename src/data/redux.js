import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
  name: "config",
  initialState: { data: undefined, loading: false, error: undefined },
  reducers: {
    requestConfig: (state, action) => {
      state.loading = true;
    },
    updateConfig: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    errorConfig: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { requestConfig, updateConfig, errorConfig } = configSlice.actions;

export default configSlice.reducer;
