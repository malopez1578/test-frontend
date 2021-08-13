import { Logo } from '../../atoms'
import { Nav } from '../../molecules'
import header from './Header.module.css'

const Header = () => {
  return (
    <header className={header['c-header']}>
      <div className={header['c-logo']}>
        <Logo />
      </div>
      <Nav />
    </header>
  )
}

export { Header }
