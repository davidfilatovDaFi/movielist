import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss'
import Header from '../../components/Header/Header';
import MovieBlock from '../../components/MovieBlock/MovieBlock';
import { fetchAPI } from '../../services/serviceAPI';
import { movieListUrl, descriptionAPI } from '../../constains/constains';
import Loader from '../../components/Loader/Loader';

function Home() {

  const [movies,setMovies] = useState([])
  const [search,setSearch] = useState('')
  const [loading,setLoading] = useState(false)

  const getMovies = async () => {
    setLoading(true)
    const data = await fetchAPI(movieListUrl+'1',descriptionAPI)
    setMovies(data.films)
    setLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])
  
  return (
    <div className={styles.home}>
      <div className='container'>
        <Header onChange={value => setSearch(value)} search={search}/>
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
    </div>
  );
}

export default Home;
