import { useDispatch } from 'react-redux'
import { getCommentsById } from '../../../core/services/posts.service'
import { ButtonModal } from '../ButtonModal/ButonModal'
import { User } from '../User/User'
import card from './Card.module.css'

const Card = ({ image, tags, text, owner, likes, id }) => {
  const completeName = `${owner.firstName} ${owner.lastName}`
  const dispatch = useDispatch()

  const handleClick = (idPost) => {
    dispatch(getCommentsById(idPost))
  }

  return (
    <div className={card['c-card']}>
      <div className={card['c-card_image']}>
        <img src={image} alt="Imagen referente al post." />
      </div>

      <div className={card['c-card_info']}>
        <div className={card['c-card_user']}>
          <User image={owner.picture} text={completeName} />
        </div>
        <div className={card['c-card_text']}>
          <p>{text}</p>
        </div>
        <div className={card['c-card_content']}>
          <ButtonModal
            idModal="modal_content"
            label="Ver comentarios"
            click={() => handleClick(id)}
          />
          <div className={card['c-card_like']}>
            <img src="./assets/images/like.svg" alt="logo de like" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
      <div className={card['c-card_tags']}>
        {tags && tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
      </div>
    </div>
  )
}

export { Card }
