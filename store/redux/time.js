import { createSlice } from "@reduxjs/toolkit";

const timeSlice= createSlice({
    name:"timetocook",
    initialState:{
        ids:[]
    },
    reducers:{
        addRecipe:(state, action) => {
            state.ids.push(action.payload.id);
        },
        removeRecipe:(state, action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        },
    }
})

export const addRecipe=timeSlice.actions.addRecipe
export const removeRecipe=timeSlice.actions.removeRecipe
export default timeSlice.reducer