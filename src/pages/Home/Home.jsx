import { useSelector } from 'react-redux'
import { Card } from '../../components/atoms/Card/Card'
import home from './Home.module.css'

const Home = () => {
  const { listPosts } = useSelector((state) => state.getPostsReducer)
  return (
    <main className={home['c-main']}>
      {listPosts &&
        listPosts.map((post) => (
          <Card
            key={post.id}
            image={post.image}
            tags={post.tags}
            text={post.text}
            owner={post.owner}
            likes={post.likes}
          />
        ))}
    </main>
  )
}

export default Home
