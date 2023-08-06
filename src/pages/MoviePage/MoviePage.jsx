import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../services/serviceAPI'
import { descriptionAPI, getUrl } from '../../constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import styles from './MoviePage.module.scss'
import { ReactComponent as Favorite } from '../../assets/imgs/favorite.svg'
import Loader from '../../components/Loader/Loader'
import DescriptionList from '../../components/DescriptionList/DescriptionList'
import useData from '../../hooks/useData'

export default function MoviePage() {

  const id = useSelector(state => state.id)
  const [getData,movie,staff,budget,loading] = useData(id)
  const favoriteMoviesId = useSelector(state => state.favorite.map(movie => movie.id))
  const dispatch = useDispatch()

  const getFavorite = () => {
    const newMovie = {
      id,
      poster:movie.posterUrlPreview,
      rating:movie.ratingKinopoisk,
      title:movie.nameRu,
      genres:movie.genres,
    }
    dispatch({type:'ADD_MOVIE',payload:newMovie})
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.main}>
      {loading 
        ? <Loader/>
        : <>
            <div className={styles.body}>
              <article className={styles.view}>
                <img className={styles.picture} src={movie.posterUrl} alt="" />
              </article>
              <article className={styles.info}>
                <div className={styles.header}>
                  <h1>{movie.nameRu}</h1>
                  <button onClick={
                    favoriteMoviesId.includes(id)
                    ? () => dispatch({type:'REMOVE_MOVIE',payload:id})
                    : getFavorite} 
                    className={styles.button}
                  >
                    <Favorite className={
                      favoriteMoviesId.includes(id)
                      ? styles.active
                      : styles.favorite}
                    />
                    Буду смотреть
                  </button>
                </div>
                <div className={styles.wrapper}>
                  <h1 className={styles.about}>О фильме</h1>
                  <div className={styles.description}>
                    <DescriptionList movie={movie} budget={budget} staff={staff}/>
                  </div>
                </div>
              </article>
            </div>
            <p className={styles.text}>{movie.description}</p>
        </>}
    </div>
  )
}
