import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Home } from './views/Home'
import { Career } from './views/Career'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/apply' exact component={Career} />
        <Redirect from='/*' to='/' />
      </Switch>
    </BrowserRouter>
  )
}
