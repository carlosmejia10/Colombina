import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import SiteReducer from "./reducers/site";
import UsersReducer from "./reducers/users";
import NotificationsReducer from "./reducers/notifications";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";


const usersPersistConfig = {
  key: "users",
  storage,
};

const persistedUsersReducer = persistReducer(usersPersistConfig, UsersReducer);

export const store = configureStore({
  reducer: {
    users: persistedUsersReducer,
    site: SiteReducer,
    notifications: NotificationsReducer,
  },
});

export const persistor = persistStore(store);