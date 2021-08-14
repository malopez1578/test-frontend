import { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Card,
  Modal,
  ModalComments,
  ModalProfile,
  Search,
} from '../../components'
import { useFilter } from '../../hooks/useFilter'
import home from './Home.module.css'

const Home = () => {
  const { listPosts } = useSelector((state) => state.getPostsReducer)
  const { dataFilter, setdataRequest, setvalueFilter } = useFilter(
    listPosts,
    ''
  )

  useEffect(() => {
    setdataRequest(listPosts)
  }, [listPosts])

  const handleInput = ({ target }) => {
    const valueSearch = target.value
    setvalueFilter(valueSearch)
  }

  return (
    <Fragment>
      <main className={home['c-main']}>
        <Search handle={handleInput} />
        {dataFilter &&
          dataFilter.map((post) => (
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
      <Modal idModal="modal_profile">
        <ModalProfile />
      </Modal>
    </Fragment>
  )
}

export default Home
