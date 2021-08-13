import { User } from '../User/User'
import card from './Card.module.css'

const Card = ({ image, tags, text, owner, likes }) => {
  const completeName = `${owner.firstName} ${owner.lastName}`
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
      </div>
      <div className={card['c-card_tags']}>
        {tags && tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
      </div>
    </div>
  )
}

export { Card }
