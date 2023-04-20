import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../services/serviceAPI'
import { descriptionAPI, movieListUrl, getUrl } from '../../constains/constains'
import { useSelector } from 'react-redux'
import styles from './MoviePage.module.scss'
import Header from '../../components/Header/Header'
import { ReactComponent as Favorite } from '../../assets/imgs/favorite.svg'
import Loader from '../../components/Loader/Loader'

export default function MoviePage() {

  const [movie,setMovie] = useState('1')
  const [staff,setStaff] = useState({})
  const [budget,setBudget] = useState([{type: 'USA', amount:0}])
  const [loading,setLoading] = useState(false)

  const id = useSelector(state => state)
  console.log(id)
  const getData = async () => {
    setLoading(true)
    const dataMovie = await fetchAPI(getUrl('movie',id),descriptionAPI,)
    const dataStaff = await fetchAPI(getUrl('staff',id),descriptionAPI)
    const dataBudget = await fetchAPI(getUrl('budget',id),descriptionAPI)
    setMovie(dataMovie)
    setStaff(dataStaff)
    const newBudget = {}
    for (let i = 0; i < dataBudget.items.length; i++) {
        newBudget[dataBudget.items[i].type] = [dataBudget.items[i].amount]
    }
    console.log(dataMovie)
    setBudget(newBudget)
    setLoading(false)
  }
  
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className={styles.main}>
      <div className='container'>
        <Header/>
        {loading 
        ? <Loader/>
        : <div className={styles.body}>
          <article className={styles.view}>
            <img className={styles.picture} src={movie.posterUrl} alt="" />
          </article>
          <article className={styles.info}>
            <header className={styles.header}>
                <h1>{movie.nameRu}</h1>
                <button className={styles.button}>
                  <Favorite className={styles.favorite}/>
                  Буду смотреть
                </button>
            </header>
            <div className={styles.wrapper}>
              <h1 className={styles.about}>О фильме</h1>
              <div className={styles.description}>
                <ul className={styles.list}>
                  <li><span>Год производства</span></li>
                  <li><span>Страна</span></li>
                  <li><span>Жанр</span></li>
                  <li><span>Режисер</span></li>
                  <li><span>Бюджет</span></li>
                  <li><span>Сборы в США</span></li>
                  <li><span>Сборы в России</span></li>
                  <li><span>Сборы в мире</span></li>
                </ul>
                <ul className={styles.list}>
                  <li><span>{movie.year}</span><span></span></li>
                  <li><span>{typeof movie.countries === 'undefined' 
                  ? '-'
                  : movie.countries.map(el => <span key={el.country}>{el.country} </span>)}</span></li>
                  <li><span>{typeof movie.genres === 'undefined' 
                  ? '-'
                  : movie.genres.map(el => <span key={el.genre}>{el.genre} </span>)}</span></li>
                  <li><span>{staff[0] === undefined ? '-' : staff[0].nameRu}</span></li>
                  <li><span>{budget['BUDGET'] ? '$' + budget['BUDGET'] : '-'}</span></li>
                  <li><span>{budget['USA'] ? '$' + budget['USA'] : '-'}</span></li>
                  <li><span>{budget['RUS'] ? '$' + budget['RUS'] : '-'}</span></li>
                  <li><span>{budget['WORLD'] ? '$' + budget['WORLD'] : '-'}</span></li>
                </ul>
              </div>
            </div>
          </article>
        </div>}
        <p className={styles.text}>{movie.description}</p>
      </div>
    </div>
  )
}
