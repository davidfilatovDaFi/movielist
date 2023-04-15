import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../services/serviceAPI'
import { descriptionAPI, movieListUrl, movieUrl } from '../../constains/constains'
import { useSelector } from 'react-redux'
import styles from './MoviePage.module.scss'

export default function MoviePage() {

  const [movie,setMovie] = useState({})

  const id = useSelector(state => state)

  const getMovie = async () => {
    const data = await fetchAPI(movieUrl+id,descriptionAPI)
    console.log(data)
    setMovie(data)
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div className={styles.main}>
      <article>
        <img src={movie.posterUrl} alt="" />
      </article>
      {movie.nameRu}
    </div>
  )
}
