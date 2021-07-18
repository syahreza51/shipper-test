import createReducer from '@/utils/createReducer'

export const USER_FETCH = 'USER_FETCH'
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
export const USER_FETCH_FAILED = 'USER_FETCH_FAILED'

export interface UserItemState {
  username: string
  firstName: string
  lastName: string
  phone: string
  email: string
  dob: string
  image: string
}

interface UserState {
  isLoading: boolean
  isError: boolean
  data: UserItemState[]
  totalResult: number
}


export const INITIAL_STATE: UserState = {
  data: [],
  isError: false,
  isLoading: false,
  totalResult: 0
}

const reducer = createReducer(INITIAL_STATE, {
  [USER_FETCH]: (state, action) => {
    state.isLoading = true
    state.totalResult = action.payload
  },
  [USER_FETCH_SUCCESS]: (state, action) => {
    state.isLoading = INITIAL_STATE.isLoading
    state.data = action.payload
  },
  [USER_FETCH_FAILED]: (state) => {
    state.isLoading = INITIAL_STATE.isLoading
    state.isError = true
  },
})

export function userFetch(payload: number) {
  return {
    type: USER_FETCH,
    payload
  }
}

export function userFetchSuccess(payload: UserItemState[]) {
  return {
    type: USER_FETCH_SUCCESS,
    payload
  }
}

export function userFetchFailed() {
  return {
    type: USER_FETCH_FAILED,
  }
}

export default reducer
