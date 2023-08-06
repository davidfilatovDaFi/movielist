import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../Home/Home&Favorite.module.scss'
import MovieBlock from '../../components/MovieBlock/MovieBlock'

export default function Favorite() {

  const search = useSelector(state => state.search)
  const movies = useSelector(state => state.favorite)

  return (
    <div className={styles.home}>
      <section className={styles.list}>
          {search 
          ? movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())).map(movie => <MovieBlock 
            key={movie.id}
            id={movie.id}
            poster={movie.poster}
            rating={movie.rating}
            title={movie.title}
            genres={movie.genres} />)
          : movies.map(movie => <MovieBlock 
          key={movie.id}
          id={movie.id}
          poster={movie.poster}
          rating={movie.rating}
          title={movie.title}
          genres={movie.genres} />)}
      </section>
    </div>
  )
}
