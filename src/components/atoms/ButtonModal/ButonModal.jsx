import { Button } from '../Button/Button'

const ButtonModal = ({ idModal, click, label }) => {
  const handleClick = () => {
    click && click()
    const modalOpen = document.querySelector(`#${idModal}`)
    modalOpen && modalOpen.classList.toggle('is-active')
  }
  return <Button click={handleClick} label={label} />
}

export { ButtonModal }
