import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statusType: "",
    featured: "",
    isGridOrList: false,
};

export const filterSliceJob = createSlice({
    name: "filterJob",
    initialState,
    reducers: {
        addStatusType: (state, action) => {
            state.statusType = action.payload;
        },
        addFeatured: (state, action) => {
            state.featured = action.payload;
        },
        toggleGridAndList: (state, action) => {
            state.isGridOrList = action.payload;
        },
    },
});

export const { addStatusType, addFeatured, toggleGridAndList } =
    filterSliceJob.actions;
export default filterSliceJob.reducer;
