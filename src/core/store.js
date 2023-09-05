import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieReducer from "../features/Movies/movieSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
  middleware: [sagaMiddleware],
});

export default store;
