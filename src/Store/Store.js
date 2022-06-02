import reducer from "./reducer";
import {applyMiddleware} from 'redux';
import {createStore} from 'redux';
import thunk from 'redux-thunk';


let Store=createStore(reducer,{},applyMiddleware(thunk))

export default Store