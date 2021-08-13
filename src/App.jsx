import { createBrowserHistory } from 'history'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Router } from 'react-router-dom'
import app from './App.module.css'
import { Header } from './components'
import { getPosts } from './core/services/posts.service'
import { Routes } from './Router/Routes'

const newHistory = createBrowserHistory()

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div className={app.main}>
      <Suspense fallback={<span>loading..</span>}>
        <Router history={newHistory}>
          <Header />
          <Routes />
        </Router>
      </Suspense>
    </div>
  )
}

export default App
