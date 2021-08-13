import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Card, Modal, ModalComments } from '../../components'
import home from './Home.module.css'

const Home = () => {
  const { listPosts } = useSelector((state) => state.getPostsReducer)
  return (
    <Fragment>
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
              id={post.id}
            />
          ))}
      </main>
      <Modal idModal="modal_content">
        <ModalComments />
      </Modal>
    </Fragment>
  )
}

export default Home
