import { lazy } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

const Welcome = lazy(() => import('../pages/Welcome/Welcome'))
const Home = lazy(() => import('../pages/Home/Home'))

export const Routes = () => {
  const { userProfile } = useSelector((state) => state.getUserReducer)
  return (
    <Switch>
      {userProfile?.name ? (
        <Route exact path="" component={Home} />
      ) : (
        <Route exact path="" component={Welcome} />
      )}
    </Switch>
  )
}
