import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { filterReducer } from '../reducers/filterReducer'
import { todosReducer } from '../reducers/todosReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  combineReducers({
    todos: todosReducer,
    filter: filterReducer
  }),
  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  )
)
