import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Home } from './views/Home'
import { Career } from './views/Career'
import { StoryBooks } from './components/storybooks'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/apply' exact component={Career} />
        <Route path='/___storybooks___' exact component={StoryBooks} />
        <Redirect from='/*' to='/' />
      </Switch>
    </BrowserRouter>
  )
}
