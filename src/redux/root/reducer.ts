import { combineReducers } from 'redux'
import { History } from 'history'

import general from '@/redux/ducks/general'
import user from '@/redux/ducks/user'

function reducer(history: History) {
  return combineReducers({ general, user })
}

export default reducer
