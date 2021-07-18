import { Epic } from 'redux-observable'

import { AppState } from 'redux/configureStore'
import { EpicDependencies } from 'redux/root/dependencies'

declare global {
  type SetState<T> = React.Dispatch<React.SetStateAction<T>>

  type Snackbar = {
    message: string
    autohide?: boolean
  }

  interface CustomAction {
    type: string
    payload?: any
    error?: Error
  }

  type CustomEpic = Epic<CustomAction, CustomAction, AppState, EpicDependencies>

  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
}
