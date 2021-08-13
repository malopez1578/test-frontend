import { useSelector } from 'react-redux'
import { Card } from '../../components/atoms/Card/Card'
import home from './Home.module.css'

const Home = () => {
  const { listPosts } = useSelector((state) => state.getPostsReducer)
  console.log('🚀 ~ file: Home.jsx ~ line 5 ~ Home ~ listPosts', listPosts)
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

export { Home }
