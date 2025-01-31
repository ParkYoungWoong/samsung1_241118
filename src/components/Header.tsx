import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/delay', label: 'Delay' },
  { to: '/todos', label: 'Todos' }
]

export default function Header() {
  const navigate = useNavigate()

  function toSignIn() {
    navigate('/signin')
  }

  return (
    <header className={styles.header}>
      {navigations.map(({ to, label }) => {
        return (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? styles.active : '')}>
            {label}
          </NavLink>
        )
      })}
      <button onClick={toSignIn}>로그인</button>
    </header>
  )
}
