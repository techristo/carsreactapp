import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./components/Setting/redux";
import configReducer from "./data/redux";

export default configureStore({
  reducer: {
    setting: settingReducer,
    config: configReducer
  }
});
