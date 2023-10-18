import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../../../UserStorage'
import NotFound404 from '../Errors/NotFound404'
import Head from '../Errors/Head'

function User() {
  const {data} = React.useContext(UserContext);

  return (
    <section className='container'>
      <Head title='Minha Conta' />

      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='userPost' element={<UserPhotoPost />} />
        <Route path='userStats' element={<UserStats />} />
        <Route path='*' element={<NotFound404 />} />

      </Routes>
    </section>
  )
}

export default User