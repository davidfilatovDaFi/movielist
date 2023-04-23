import React, { useState } from 'react'
import logo from '../../assets/imgs/logo.png'
import favorite from '../../assets/imgs/favorite.svg'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {

  const search = useSelector(state => state.search)
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.body}>
        <h1 className={styles.title}>Movie<span>List</span></h1>
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.user}>
        <input placeholder='Search movie...' value={search} onChange={e => dispatch({type:'SEARCH',payload:e.target.value})} className={styles.search} type="text" />
        <Link to={'/favorite'}><img src={favorite} alt="favorite" /></Link>
      </div>
  </header>
  )
}
