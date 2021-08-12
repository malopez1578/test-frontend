import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './App.css';
import { getPosts } from "./core/services/posts.service";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])


  return (
    <div className="App">
        <p>HMR updates</p>
    </div>
  )
}

export default App
