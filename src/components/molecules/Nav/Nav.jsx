import { Login, User } from '../../atoms'
import nav from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={nav['c-nav']}>
      <User image="https://via.placeholder.com/150" text="xxxx xxxxx" />
      <Login />
    </nav>
  )
}

export { Nav }
