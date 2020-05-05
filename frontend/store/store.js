import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

// const _preloadedState = {
//     entities : {
//         groups: { 1 : { 
//                         id: 1, 
//                         title: "demoTitle", 
//                         about: "Some text",
//                         cityId: 2,
//                         organizerId: 3
//                     }
//                 }
//             }
// }

const configureStore = (preloadedState = {}) =>
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

export default configureStore;