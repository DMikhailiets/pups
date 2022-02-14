 
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { settingsReducer, PUPsReducer, multicastReducer} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
  settingsReducer,
  PUPsReducer,
  multicastReducer
})

type RootReducer = typeof rootReducer
export type AppState = ReturnType<RootReducer>

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  ))

export default store