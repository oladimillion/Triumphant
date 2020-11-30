import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { ErrorBoundary } from './Components/SimpleForm/hoc/withErrorBoundary'
const Home = React.lazy(() => import('./Views/Home')) 
const Career = React.lazy(() => import('./Views/Career')) 
const Storybooks = React.lazy(() => import('./Components/Storybooks')) 

export const Routes = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/apply' component={Career} />
            <Route path='/storybooks' component={Storybooks} />
            <Redirect from='/*' to='/' />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
