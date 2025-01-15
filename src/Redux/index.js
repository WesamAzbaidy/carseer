import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import carManufacturers from "./CarManufacturers/CarManufacturersReducer";


const persistConfig = {
  key: "main",
  storage,
  manualPersist: true,
};
const reducers = combineReducers({
  CarManufacturers: carManufacturers,
});
const persistreducer = persistReducer(persistConfig, reducers);
const store = createStore(persistreducer, applyMiddleware(thunk));
const Presist = persistStore(store);
export { Presist };
export default store;
