import React, { useCallback, useEffect, useState } from 'react';
import styles from './Home&Favorite.module.scss'
import MovieBlock from '../../components/MovieBlock/MovieBlock';
import { fetchAPI } from '../../services/serviceAPI';
import { movieListUrl, descriptionAPI } from '../../constains/constains';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';

function Home() {

  const [movies,setMovies] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)
  const [pagesCount,setPagesCount] = useState(5)
  const [fetching,setFetching] = useState(true)
  const search = useSelector(state => state.search)

  const getMovies = async () => {
    setLoading(true)
    const data = await fetchAPI(movieListUrl+currentPage,descriptionAPI)
    setMovies([...data.films])
    setPagesCount(data.pagesCount)
    setLoading(false)
    setCurrentPage(currentPage + 1)
  }

  const addMovies = async () => {
    if (fetching && search === '') {
      const data = await fetchAPI(movieListUrl+currentPage,descriptionAPI)
      setMovies([...movies, ...data.films])
      setCurrentPage(currentPage + 1)
      setFetching(false)
    }
  }

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && currentPage < pagesCount) {
      setFetching(true)
    }
  }

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
