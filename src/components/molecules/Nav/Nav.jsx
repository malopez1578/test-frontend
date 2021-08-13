import { useSelector } from 'react-redux'
import { Login, User } from '../../atoms'
import nav from './Nav.module.css'

const Nav = () => {
  const { userProfile } = useSelector((state) => state.getUserReducer)
  console.log('🚀 ~ file: Nav.jsx ~ line 10 ~ Nav ~ userProfile', userProfile)
  return (
    <nav className={nav['c-nav']}>
      {userProfile.name && (
        <User image={userProfile.imageUrl} text={userProfile.name} />
      )}
      <Login />
    </nav>
  )
}

export { Nav }
