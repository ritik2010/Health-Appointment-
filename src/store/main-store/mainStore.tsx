import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../useReducer/userReducer";
import authStore from "../AuthStore/authReducer";


const mainStore = configureStore({
reducer:{
    user:useReducer.reducer,
    auth:authStore.reducer
}
})


export default mainStore;