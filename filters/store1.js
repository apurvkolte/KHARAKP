import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import {
    authReducer, allUsersReducer, allInquiryReducer, userReducer, userDetailsReducer, forgotPasswordReducer, enquiryReducer,
    inquiryReducer, newAppliedJobReducer
} from './reducers/userReducers';
import {
    propertiesReducer, propertyReducer, propertyDetailsReducer, newPropertyReducer, topPropertiesReducer, allBlogsReducer,
    blogDetailsReducer, blogReducer, newBlogReducer, newAdvertiseReducer, allAdvertiseReducer, advertiseReducer, displayPropertiesReducer,
    displayBlogReducer, displayAdvertiseReducer, allJobsReducer, jobReducer, jobDetailsReducer, newJobReducer, sideImageReduser
} from './reducers/propertyReducers';

import agentSlice from "../features/agent/agentSlice";
import { api } from "../features/api/api";
import filterSlice from "../features/filter/filterSlice";
import filterSliceJob from "../features/filter/filterSliceJob";
import propertiesSlice from "../features/properties/propertiesSlice";
import propertiesSliceJob from "../features/properties/propertiesSliceJob";

const reducer = combineReducers({
    auth: authReducer,
    properties1: propertiesReducer,
    property: propertyReducer,
    propertyDetails: propertyDetailsReducer,
    topProperties: topPropertiesReducer,
    newProperty: newPropertyReducer,
    [api.reducerPath]: api.reducer,
    properties: propertiesSlice,
    propertiesJob: propertiesSliceJob,
    filter: filterSlice,
    filterJob: filterSliceJob,
    agent: agentSlice,
    allUsers: allUsersReducer,
    user: userReducer,
    userDetails: userDetailsReducer,
    allBlogs: allBlogsReducer,
    blog: blogReducer,
    blogDetails: blogDetailsReducer,
    newBlog: newBlogReducer,
    forgotPassword: forgotPasswordReducer,
    enquiry: enquiryReducer,
    allInquiry: allInquiryReducer,
    inquiry: inquiryReducer,
    newAdvertise: newAdvertiseReducer,
    allAdvertise: allAdvertiseReducer,
    advertise: advertiseReducer,
    displayProperties: displayPropertiesReducer,
    displayBlog: displayBlogReducer,
    displayAdvertise: displayAdvertiseReducer,
    allJobs: allJobsReducer,
    job: jobReducer,
    jobDetails: jobDetailsReducer,
    newJob: newJobReducer,
    sideImage: sideImageReduser,
    newAppliedJob: newAppliedJobReducer
})

let initialState = {
    // cart: {
    //     cartItems: localStorage.getItem('cartItems')
    //         ? JSON.parse(localStorage.getItem('cartItems'))
    //         : [],
    //     buyItem: localStorage.getItem('buyItem')
    //         ? JSON.parse(localStorage.getItem('buyItem'))
    //         : [],
    //     shippingInfo: localStorage.getItem('shippingInfo')
    //         ? JSON.parse(localStorage.getItem('shippingInfo'))
    //         : {}
    // }
}

const middleware = [thunk];
const store1 = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store1;