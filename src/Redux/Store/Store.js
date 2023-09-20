import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from './Slice/Slice'

const store = configureStore({
    reducer : {
        Stu_Data : StudentSlice
    }
})

export default store;