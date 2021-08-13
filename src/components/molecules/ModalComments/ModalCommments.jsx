import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import modalComments from './ModalComments.module.css'

const ModalComments = () => {
  const { commentsData, loading } = useSelector(
    (state) => state.getCommentsByIdReducer
  )

  return (
    <Fragment>
      {loading === 'pending' ? (
        <span> loading...</span>
      ) : (
        <Fragment>
          {commentsData && commentsData.length > 0 ? (
            <Fragment>
              <h6 className={modalComments['c-title']}>Comentarios</h6>
              {commentsData.map((comment) => (
                <div key={comment.id} className={modalComments['c-comment']}>
                  <img
                    className={modalComments['c-comment_img']}
                    src={comment.owner.picture}
                    alt=""
                  />
                  <div className={modalComments['c-comment_text']}>
                    <div>
                      <small>
                        {comment.owner.firstName}
                        {comment.owner.lastName}
                      </small>
                    </div>
                    <div>
                      <p>{comment.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Fragment>
          ) : (
            <span>no hay commentarios</span>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

export { ModalComments }
