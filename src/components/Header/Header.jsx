import React, { useState } from 'react'
import logo from '../../assets/imgs/logo.png'
import favorite from '../../assets/imgs/favorite.svg'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header({onChange,search}) {
  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.body}>
        <h1 className={styles.title}>Movie<span>List</span></h1>
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.user}>
        <input placeholder='Search movie...' value={search} onChange={e => onChange(e.target.value)} className={styles.search} type="text" />
        <a href=""><img src={favorite} alt="favorite" /></a>
      </div>
  </header>
  )
}
