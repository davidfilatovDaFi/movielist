import React from 'react'
import styles from '../../pages/MoviePage/MoviePage.module.scss'

export default function DescriptionList({movie,staff,budget,loading}) {
  console.log(budget)
  return (
    <ul className={styles.list}>
      <li>
        <span>Год производства</span>
        <span>{movie.year}</span><span></span>
      </li>
      <li>
        <span>Страна</span>
        <span>{typeof movie.countries === 'undefined' 
          ? '-'
          : movie.countries.map(el => <span key={el.country}>{el.country} </span>)}
        </span>
      </li>
      <li>
        <span>Жанр</span>
        <span>{typeof movie.genres === 'undefined' 
          ? '-'
          : movie.genres.map(el => <span key={el.genre}>{el.genre} </span>)}
        </span>
      </li>
      <li>
        <span>Режисер</span>
        <span>{staff[0] === undefined ? '-' : staff[0].nameRu}</span>
      </li>
      <li>
        <span>Бюджет</span>
        <span>{budget['BUDGET'] ? '$' + budget['BUDGET'] : '-'}</span>
      </li>
      <li>
        <span>Сборы в США</span>
        <span>{budget['USA'] ? '$' + budget['USA'] : '-'}</span>
      </li>
      <li>
        <span>Сборы в России</span>
        <span>{budget['RUS'] ? '$' + budget['RUS'] : '-'}</span>
      </li>
      <li>
        <span>Сборы в мире</span>
        <span>{budget['WORLD'] ? '$' + budget['WORLD'] : '-'}</span>
      </li>
    </ul>
  )
}
