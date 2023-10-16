import React from 'react';
import { UserContext } from '../../../UserStorage';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from '../../Css/PhotoStyles/PhotoComments.module.css';

function PhotoComments({id, comments}) {
  const [comment, setComment] = React.useState(() => comments)
  const {login} = React.useContext(UserContext);

  return (
    <>
      <ul className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}: </strong>
            <p>{comment.comment_content}</p>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} setComments={setComment} />}
    </>
  )
}

export default PhotoComments