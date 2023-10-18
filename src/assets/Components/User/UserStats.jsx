import React from 'react';
import Head from '../Errors/Head';
import { useFetcher, useFetchers } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../../api';
import Loading from '../Errors/Loading';
import Error from '../Errors/Error';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

function UserStats() {
  const { data, error, request, loading } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();

      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error />

  if (data)
    return (
      <React.Suspense
        fallback={<div>Nenhum resultado para mostrar</div>}>

        <Head title='Estatisticas' />
        <UserStatsGraphs data={data} />
        
      </React.Suspense>
    )
  else
    return null;
}

export default UserStats