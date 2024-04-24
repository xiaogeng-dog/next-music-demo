"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/home";
import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  home: homeReducer,
  //add all your reducers here
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const wrapper = createWrapper(() => store);
export default wrapper;

export function ReduxProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
export type IAppDispatch = typeof store.dispatch; // 这个是dispatch函数的类型
export type IAppRootState = ReturnType<typeof store.getState>; // 这个是rootState的类型
