import React from 'react'
// import { Link } from 'react-router-dom'
import styles from '../styles/home.module.css'
import { useUserAuth } from '../context/UserAuthContext'

const Header = () => {
  const { logOut } = useUserAuth()
  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <>
      <header className={styles.headerdiv}>
        <div className={styles.header}>
          <ul className={styles.nav}>
            <li>
              <a href="/todos">Home</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/signup">Sign up</a>
            </li>
          </ul>
        </div>
        <button onClick={handleLogOut} className={styles.logout}>
          Sign out
        </button>
      </header>
    </>
  )
}

export default Header
