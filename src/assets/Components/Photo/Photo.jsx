import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET_PAGE } from '../../../api';
import Error from '../Errors/Error';
import Loading from '../Errors/Loading';
import PhotoContent from './PhotoContent';

function Photo() {
  const { id } = useParams()
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET_PAGE(id)
    request(url, options);
  }, [id, request])

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data) {
    return (
      <section className='container mainContainer'>
        <PhotoContent single={true} data={data}/>
      </section>
    )
  } else return null;

}

export default Photo;