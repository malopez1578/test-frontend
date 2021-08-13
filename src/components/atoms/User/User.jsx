import user from './User.module.css'

const User = ({ image, text }) => {
  return (
    <div className={user['c-user']}>
      <p className={user['c-user_text']}>{text}</p>
      <figure className={user['c-figure']}>
        <img className={user['c-image']} src={image} alt="imagen de perfil" />
      </figure>
    </div>
  )
}

export { User }
