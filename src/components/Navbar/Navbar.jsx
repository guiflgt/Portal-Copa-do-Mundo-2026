import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoText}>
          Copa do Mundo <span className={styles.logoAccent}>2026</span>
        </span>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/selecoes"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Seleções
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/estadios"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Estádios
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jogos"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Jogos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
