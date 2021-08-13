import { Button } from '../Button/Button'
import modal from './Modal.module.css'

const Modal = ({ idModal, type, dataModal, children }) => {
  const handleClick = () => {
    const modalOpen = document.querySelector(`#${idModal}`)
    modalOpen && modalOpen.classList.remove('is-active')
  }
  return (
    <div className={modal['c-overlay']} id={idModal} onClick={handleClick}>
      <div className={modal['c-modal']}>
        <div className={modal['c-closeModal']}>
          <Button label="x" click={handleClick} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export { Modal }
