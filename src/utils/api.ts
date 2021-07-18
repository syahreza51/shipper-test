import { ajax, AjaxResponse } from 'rxjs/ajax'
import { Observable } from 'rxjs'

import generateUrl from './generateUrl'
import { Endpoint } from '@/helpers/constants/endpoints'

export interface Options {
    apiary?: boolean // this for select using apiary or server staging
    endpoint: Endpoint
    params?: Record<string, unknown>
    query?: Record<string, unknown>
    body?: Record<string, unknown>
}

export default function api(options: Options): Observable<AjaxResponse> {
  const { endpoint, params = {}, query, body } = options
  const [method, path] = endpoint

  const url = generateUrl(path, params, query)
  const proxyUrl = process.env.REACT_APP_SERVER_HOST

  return ajax({
    method,
    headers: { 'Content-Type': 'application/json' },
    url: `${proxyUrl}${url}`,
    body: JSON.stringify({
        Authorization: '',
        body,
    }),
  })
}
