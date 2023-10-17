import React from 'react'
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [page, setPage] = React.useState([1])
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75) {
          setPage((page) => [...page, page.length + 1])
          wait = true;

          setTimeout(() => {
            wait = false
          }, 500)
        }
      }

    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      removeEventListener('wheel', infiniteScroll);
      removeEventListener('scroll', infiniteScroll);
    }
  }, [infinite])

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}

      {page.map((page) => (
        <FeedPhotos 
        key={page} 
        user={user} 
        page={page} 
        setModalPhoto={setModalPhoto}
        setInfinite={setInfinite} />
      ))}
    </div>
  )
}

export default Feed