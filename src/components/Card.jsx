import React from 'react'
import styles from '@/styles/Home.module.css'

function Card(props) {
  return (
    <>
      {Object.entries(props.data).map((item, i) => {
        return (
          <div className={styles.card} key={i}>
            <h3 className={styles.from}>
              {item[1].from}
            </h3>
            <p className={styles.message}>
              {item[1].message}
            </p>
          </div>
        )
      })}
    </>
  )
}

export default Card