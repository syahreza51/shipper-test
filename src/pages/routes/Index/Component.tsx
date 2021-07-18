import React, { lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import withSuspense from '@/helpers/hoc/withSuspense'

const Driver = lazy(() => import('@/pages/Driver'))

const PageIndex = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={withSuspense(Driver)} />
      </Switch>
    </BrowserRouter>
  )
}

export default PageIndex
