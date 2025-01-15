import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import carManufacturers from "./CarManufacturers/CarManufacturersReducer";
import vehicleTypes from "./VehicleTypes/VehicleTypesReducer";
import modelsCar from "./ModelsCar/ModelsCarReducer";


const persistConfig = {
  key: "main",
  storage,
  manualPersist: true,
};
const reducers = combineReducers({
  CarManufacturers: carManufacturers,
  VehicleTypes: vehicleTypes,
  ModelsCar: modelsCar

});
const persistreducer = persistReducer(persistConfig, reducers);
const store = createStore(persistreducer, applyMiddleware(thunk));
const Presist = persistStore(store);
export { Presist };
export default store;
