import { combineEpics } from 'redux-observable'

import * as user from '@/redux/epics/user'

export default combineEpics(
  ...Object.values(user),
)
