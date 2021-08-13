import { Logo } from '../../components'
import welcome from './Welcome.module.css'

const Welcome = () => {
  return (
    <div className={welcome['c-welcome']}>
      <Logo />
    </div>
  )
}

export default Welcome
