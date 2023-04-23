import React from 'react'
import styles from './MovieBlock.module.scss'
import { Link } from 'react-router-dom'
import  { useDispatch } from 'react-redux'

export default function MovieBlock({poster,rating, title, genres, id}) {

  const getRating = (rating) => {
    if ((rating+'').includes('%')) {
      return rating.slice(0,rating.length-1) / 10
    } else if (!rating) {
      return '7.5'
    } else {
      return rating
    }
  }

  const dispatch = useDispatch()

  return (
      <article className={styles.block}>
        <Link onClick={() => {
          dispatch({type:'GET_ID',payload:id})
          dispatch({type:'SEARCH',payload:''})
          }} to={'/movie'}>
          <div className={styles.poster}>
            <span className={styles.rating}>{getRating(rating)}</span>
            <img className={styles.picture} src={poster} alt="poster" />
          </div>
        </Link>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.genres}>
            {genres.map(genre => <span key={genre.genre}>{genre.genre} </span> )}
          </div>
      </article>


  )
}
