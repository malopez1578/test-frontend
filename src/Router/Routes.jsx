import { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const Welcome = lazy(() => import('../pages/Welcome/Welcome'))

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="" component={Welcome} />
    </Switch>
  )
}
