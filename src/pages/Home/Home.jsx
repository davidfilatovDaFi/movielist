import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss'
import Header from '../../components/Header/Header';
import MovieBlock from '../../components/MovieBlock/MovieBlock';

function Home() {

  const [movies,setMovies] = useState([])

  async function getMovies () {
    const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1', {
      method: 'GET',
      headers: {
          'X-API-KEY': '30d403ff-e11b-4650-8973-c33043daef63',
          'Content-Type': 'application/json',
      },
  })
    const data = await response.json()
    setMovies(data.films)
  }

  useEffect(() => {
    getMovies()
  }, [])
  
  console.log(movies)
  return (
    <div className={styles.home}>
      <div className='container'>
        <Header/>
        <section className={styles.list}>
        {movies.map(movie => <MovieBlock 
        key={movie.filmId}
        poster={movie.posterUrlPreview}
        rating={movie.rating}
        title={movie.nameRu}
        genres={movie.genres} />)}
      </section>
      </div>
    </div>
  );
}

export default Home;
