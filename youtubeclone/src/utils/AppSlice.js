import { createSlice } from "@reduxjs/toolkit";

const appSclice = createSlice({
  name: "app",
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { toggleSidebar } = appSclice.actions;
export default appSclice.reducer;
