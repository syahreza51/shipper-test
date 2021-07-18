import produce from 'immer'

interface Action {
  type: string
  payload?: any
  meta?: string
  error?: Record<string, unknown>
}

interface FnMap<T> {
  [key: string]: (draft: T, action: Action) => void
}

const createReducer = <T>(initialState: T, fnMap: FnMap<T>) =>
  produce(
    (draft, action) => {
      const callback = fnMap[action.type]
      if (callback) {
        return callback(draft, action)
      }
    },
    initialState as any,
  )

export default createReducer
