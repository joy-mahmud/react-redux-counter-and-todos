import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "./services/reducers/CounterReducer";
import { todoReducer } from "./services/reducers/todoReducer";
import {thunk} from 'redux-thunk'
const rootReducer = combineReducers({
    counterR:counterReducer,
    todoR:todoReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk))
export default store;