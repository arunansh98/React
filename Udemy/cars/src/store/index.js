import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { changeName, changeCost, formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

console.log(store.getState());

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };
