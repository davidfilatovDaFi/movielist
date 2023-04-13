import React from 'react'
import styles from './MovieBlock.module.scss'

export default function MovieBlock({poster,rating, title, genres}) {

  const getRating = (rating) => {
    console.log(rating)
    if ((rating+'').includes('%')) {
      return rating.slice(0,rating.length-1) / 10
    } else if (!rating) {
      return '7.5'
    } else {
      return rating
    }
  }

  return (
    <article className={styles.block}>
        <div className={styles.poster}>
          <span className={styles.rating}>{getRating(rating)}</span>
          <img className={styles.picture} src={poster} alt="poster" />
        </div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.genres}>
          {genres.map(genre => <span key={genre.genre}>{genre.genre} </span> )}
        </div>
    </article>
  )
}
