import React, { useEffect } from 'react';
import styles from './Home&Favorite.module.scss'
import MovieBlock from '../../components/MovieBlock/MovieBlock';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import useMovies from '../../hooks/useMovies';

function Home() {

  const search = useSelector(state => state.search)
  const [getMovies,addMovies,scrollHandler,movies,loading,currentPage,pagesCount,fetching] = useMovies(search)

  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    document.addEventListener('scroll',scrollHandler)
    return () => {
      document.removeEventListener('scroll',scrollHandler)
    }
  },[pagesCount,currentPage]) 

  useEffect(() => {
    addMovies()
  }, [fetching])

  return (
    <div className={styles.home}>
      {loading 
          ? <Loader/>
          : <section className={styles.list}>
          {search 
          ? movies.filter(movie => movie.nameRu.toLowerCase().includes(search.toLowerCase())).map(movie => <MovieBlock 
            key={movie.filmId}
            id={movie.filmId}
            poster={movie.posterUrlPreview}
            rating={movie.rating}
            title={movie.nameRu}
            genres={movie.genres} />)
          : movies.map(movie => <MovieBlock 
          key={movie.filmId}
          id={movie.filmId}
          poster={movie.posterUrlPreview}
          rating={movie.rating}
          title={movie.nameRu}
          genres={movie.genres} />)}
      </section>}
    </div>
  );
}

export default Home;
