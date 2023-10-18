import React from 'react';
import Feed from './Feed/Feed';
import Head from './Errors/Head';

function Home() {
  return (
    <section className='container mainContainer'>
      <Head title='Fotos' description='Home do site Dogs' />
      <Feed />
    </section>
  )
}

export default Home