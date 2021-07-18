import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

// Import epic dependencies here

import createRootReducer from '@/redux/root/reducer'
import rootEpic from '@/redux/root/epic'
import dependencies from '@/redux/root/dependencies'

export const history = createBrowserHistory()
const rootReducer = createRootReducer(history)

export type AppState = ReturnType<typeof rootReducer>

export function configureStore() {
  const logger = createLogger({ collapsed: true })
  const epicMiddleware = createEpicMiddleware<CustomAction, CustomAction, AppState>({
    dependencies,
  })

  const middlewares = [epicMiddleware, routerMiddleware(history), logger]

  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  epicMiddleware.run(rootEpic)

  return store
}
