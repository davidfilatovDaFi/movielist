import React, { useState } from 'react'
import logo from '../../assets/imgs/logo.png'
import favorite from '../../assets/imgs/favorite.svg'
import styles from './Header.module.scss'

export default function Header() {

  const [search,setSearch] = useState('')

  return (
    <header className={styles.header}>
      <div className={styles.body}>
        <h1 className={styles.title}>Movie<span>List</span></h1>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.user}>
        <input value={search} onChange={e => setSearch(e.target.value)} className={styles.search} type="text" />
        <a href=""><img src={favorite} alt="favorite" /></a>
      </div>
  </header>
  )
}
