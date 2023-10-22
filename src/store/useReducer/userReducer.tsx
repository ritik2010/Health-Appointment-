import { createSlice } from "@reduxjs/toolkit";


const userState = {userData:{}}

type actionType={
    payload:{
        userData:any
    }
}

const useReducer = createSlice({
    name:"useReducer",
    initialState:userState,
    reducers:{
            addUserData :(state:any,action:actionType)=>{
                console.log(action)
                state.userData = action.payload
            }
    }
});

export const {addUserData} = useReducer.actions;
export default useReducer;