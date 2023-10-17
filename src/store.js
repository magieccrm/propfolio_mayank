

import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { agentReducer } from "./reducers/agentReducer";

//const { isAuthenticated, agent } = useSelector((state) => state.agent);
const reducer= combineReducers({
     // products:productReducer,
      agent:agentReducer

});
  console.log(reducer)
let initialState={
      
};
const middleware=[thunk];  
const store=createStore(reducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware)));

export default store;   