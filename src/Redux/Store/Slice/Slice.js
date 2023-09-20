import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {name : 'Prince', age : 22, course : "Top G", batch : "EA24"},
    {name : 'Conor', age : 22, course : "MERN", batch : "EA24"},
    {name : 'Cristiano', age : 22, course : "MEAN", batch : "EA24"},
    {name : 'Virat', age : 22, course : "Python", batch : "EA24"},
    {name : 'Leo', age : 22, course : "MERN", batch : "EA24"},
    
]

const StudentSlice = createSlice({
    name : "Stu_Data",
    initialState,
    reducers : {
               editStudent : (state, action) => {
                state[action.payload.index] = action.payload.info;
                // console.log(action.payload.index)
                // console.log(action.payload.info)
               },
               addStudent : (state, action) => {
                 state.push(action.payload)
               }
    }
})

export const {editStudent,  addStudent} = StudentSlice.actions;
export default StudentSlice.reducer