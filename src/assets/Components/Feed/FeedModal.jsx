import React from 'react';
import styles from '../../Css/FeedStyles/FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../../api';
import Error from '../Errors/Error';
import Loading from '../Errors/Loading';
import PhotoContent from '../Photo/PhotoContent';

function FeedModal({photo, setModalPhoto}) {
  const {data, loading, error, request} = useFetch();

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options)

  }, [request, photo])

  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
   <div className={styles.modal} onClick={handleOutsideClick}>
    {error && <Error error={error} />} 
    {loading && <Loading />} 

    {data && <PhotoContent data={data} />}
   </div>
  )
}

export default FeedModal;