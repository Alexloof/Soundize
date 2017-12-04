import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'

import reducers from '../reducers'

export default req => {
  const store = createStore(reducers, {}, compose(applyMiddleware(thunk)))

  return store
}

// autoRehydrate() into compose if you want to save store

/* Lägg till whitelist: ['someReducer'] i options objektet nedan, om vi ska spara nått specifikt i localstorage/Asyncstorage */
// persistStore(store, { storage: AsyncStorage }) // chain on '.purge()' to clear async
