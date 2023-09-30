import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import authSlice from "./authSlice";
import classSlice from "./classSlice";
import schoolSlice from "./schoolSlice";
import lessonSlice from "./lessonSlice";
import librarySlice from "./librarySlice";

const store = configureStore({
  auth: authSlice,
});
export default store;
