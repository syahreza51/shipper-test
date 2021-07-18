import createReducer from '@/utils/createReducer'

export const GENERAL_VISIBLE_SIDEBAR_SET = 'GENERAL_VISIBLE_SIDEBAR_SET'

interface UserState {
  isVisibleSidebar: boolean
}

export const INITIAL_STATE: UserState = {
  isVisibleSidebar: false
}

const reducer = createReducer(INITIAL_STATE, {
  [GENERAL_VISIBLE_SIDEBAR_SET]: (state) => {
    state.isVisibleSidebar = !state.isVisibleSidebar
  },
})

export function generalVisibleSidebarSet() {
  return {
    type: GENERAL_VISIBLE_SIDEBAR_SET,
  }
}

export default reducer
