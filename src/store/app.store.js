import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from 'store/todo/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './todo/sagas/app.saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
