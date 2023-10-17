import React from 'react';
import { ReactComponent as IconSend } from '../../img/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../../api';
import Error from '../Errors/Error';
import styles from '../../Css/PhotoStyles/PhotoCommentsForm.module.css';

function PhotoCommentsForm({id, setComments}) {
  const {request, error} = useFetch();
  const [comentario, setComentario] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = COMMENT_POST(id, {comentario})
    const {response, json} = await request(url, options);
    console.log(json, response)
    if(response.ok) {
      setComentario('');
      setComments((comment) => [...comment, json]);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea 
        className={styles.textarea}
        name="comment" 
        id="comment" 
        placeholder='Faça um Comentário...'
        value={comentario} 
        onChange={({target}) => setComentario(target.value) } 
      />

      <button className={styles.btn}>
        <IconSend />
      </button>

      <Error error={error}/>
    </form>
  )
}

export default PhotoCommentsForm