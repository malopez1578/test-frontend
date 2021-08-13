import button from './Button.module.css'

const Button = ({ click, label, type }) => {
  return (
    <button className={button['c-btn']} onClick={click}>
      {label}
    </button>
  )
}

export { Button }
