import React from 'react';
import { UserContext } from '../../../UserStorage';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from '../../Css/PhotoStyles/PhotoComments.module.css';

function PhotoComments({id, comments}) {
  const [comment, setComment] = React.useState(() => comments)
  const commentSection = React.useRef(null);
  const {login} = React.useContext(UserContext);

  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comment])

  return (
    <>
      <ul ref={commentSection} className={styles.comments}>
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