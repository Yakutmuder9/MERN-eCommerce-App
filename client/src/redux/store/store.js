import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/productSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, productReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    product: productReducer,
  },
});

const persistor = persistStore(store);
export { store, persistor };
// export { store };
