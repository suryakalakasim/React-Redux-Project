import { createStore,applyMiddleware } from "redux"; 
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./userSaga";
import logger from 'redux-logger';
const sagaMiddleware=createSagaMiddleware();
const middleware=[sagaMiddleware]
if(process.env.NODE_ENV==='development'){
    middleware.push(logger)
}
export const store=createStore(
  rootReducer,applyMiddleware(...middleware)
);
sagaMiddleware.run(rootSaga)