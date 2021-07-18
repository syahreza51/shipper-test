/* eslint-disable import/prefer-default-export */
import { Epic, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { catchError,map, switchMap } from 'rxjs/operators'

import { USER_ALL_GET } from '@/helpers/constants/endpoints'
import { isJsonString } from '@/utils/checkData'
import { TOTAL_DATA, USER_LOCAL_STORAGE } from '@/helpers/constants/data'

import {
  USER_FETCH,
  userFetchSuccess,
  userFetchFailed
} from '@/redux/ducks/user'

export const userFetchAllEpics: Epic = (action$, state$, { api, localStorage }) =>
  action$.pipe(
    ofType(USER_FETCH),
    switchMap(() => {
      const data = localStorage.getLocalStorage(USER_LOCAL_STORAGE)
      if(data && isJsonString(data) && JSON.parse(data).length === TOTAL_DATA) {
        return of(userFetchSuccess(JSON.parse(data)))
      }

      return api({
        endpoint: USER_ALL_GET,
        query: {
          results: state$.value.user.totalResult
        }
      }).pipe(
        map(({ response }: any) => {
          const data = response.results.map((el: any) => ({
            username: el.login.username,
            firstName: el.name.first,
            lastName: el.name?.last || '',
            phone: el.cell,
            email: el.email,
            dob: el.dob.date,
            image: el.picture.large,
          }))
          localStorage.setLocalStorage({ key: USER_LOCAL_STORAGE, value: JSON.stringify(data)})
          return userFetchSuccess(data)
        }),
        catchError(() => of(userFetchFailed()),
      ),
      )
    })
  )
