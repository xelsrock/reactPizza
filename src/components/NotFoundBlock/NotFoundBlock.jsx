import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>:(</span>
      <h1>Увы, такой страницы не существует...</h1>
    </div>
  )
}

export default NotFoundBlock