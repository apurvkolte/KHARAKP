import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: "",
    propertyType: "",
    location: "",
    status: "",
    area: {
        max: "",
    },
    length: 0,
};

export const propertiesSliceJob = createSlice({
    name: "propertiesJob",
    initialState,
    reducers: {
        addKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        addLocation: (state, action) => {
            state.location = action.payload;
        },

        addStatus: (state, action) => {
            state.status = action.payload;
        },

        addAreaMax: (state, action) => {
            state.area.max = action.payload;
        },
        addLength: (state, action) => {
            state.length = action.payload;
        },
    },
});

export const {
    addKeyword,
    addLocation,
    addStatus,
    addAreaMax,
    addLength,
    resetAmenities,
} = propertiesSliceJob.actions;
export default propertiesSliceJob.reducer;
