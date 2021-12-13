import userReducer from "../redux/reducers/user";
import { logger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

//redux config
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

let persistor = persistStore(store);
export { store, persistor };
