import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta linea es para conectar don la extensnion del navegador => REDUX DEVTOOLS

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // esta linea es para poder hacer peticiones a un server
)

export default store;