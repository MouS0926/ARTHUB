import { applyMiddleware, combineReducers, legacy_createStore } from "redux";


import { reducer as signReducer } from "./signup/reducer";
import { reducer as singleData } from "./Products/reducer";
import { reducer as Loginreducer } from "./Login/reducer";
import { reducer as UserPostReducer } from "./UserpostReducer/reducer";
import thunk from "redux-thunk";
import { reducer as creatorReducer } from "./Creator/reducer";


const rootReducer = combineReducers({
  singleData,
    signReducer,
    Loginreducer,
    UserPostReducer,
    creatorReducer
  });

 
  
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


