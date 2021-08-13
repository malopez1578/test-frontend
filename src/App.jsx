import { useEffect } from "react";
import { useDispatch } from "react-redux";
import app from './App.module.css';
import { Header } from './components';
import { getPosts } from "./core/services/posts.service";
import { Home } from './pages/Home/Home';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])


  return (
    <div className={app.main}>
        <Header />
        <Home></Home>
    </div>
  )
}

export default App
