import React from 'react';
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../../api';
import Error from '../Errors/Error';
import Loading from '../Errors/Loading';
import styles from '../../Css/FeedStyles/FeedPhotos.module.css';

function FeedPhotos({page, setModalPhoto, user, setInfinite}) {
  const {error, loading, data, request} = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 5;
      const {url, options} = PHOTOS_GET({page, total, user})
      const {response, json} = await request(url, options);

      if(response && response.ok && json.length < total) {
        setInfinite(false)
      }
    }
    fetchPhotos()
  }, [request, user, page, setInfinite])

  if(error) return <Error error={error} />;
  if(loading) return <Loading />
  if(data) 
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotoItem 
          key={photo.id} 
          photo={photo} 
          setModalPhoto={setModalPhoto} />
        ))}
      </ul>
    )
  
  else return null;
}

export default FeedPhotos