import React from 'react';
import FeedPhotoItem from './FeedPhotoItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../../api';
import Error from '../Errors/Error';
import Loading from '../Errors/Loading';
import styles from '../../Css/FeedStyles/FeedPhotos.module.css';

function FeedPhotos({setModalPhoto}) {
  const {error, loading, data, request} = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0})
      const {response, json} = await request(url, options);
      console.log(json)
    }
    fetchPhotos()
  }, [request])

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