import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from '../Home/Home.module.scss'
import Header from '../../components/Header/Header'
import MovieBlock from '../../components/MovieBlock/MovieBlock'

export default function Favorite() {

  const [search,setSearch] = useState('')

  const movies = useSelector(state => state.favorite)
  console.log(movies)
  return (
    <div className={styles.home}>
      <div className='container'>
        <Header onChange={value => setSearch(value)} search={search}/>
        <section className={styles.list}>
          {search 
          ? movies.filter(movie => movie.nameRu.toLowerCase().includes(search.toLowerCase())).map(movie => <MovieBlock 
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
    </div>
  )
}
