import styles from './style.module.scss'

export default function Navbar() {
  return (
     <header className={`${styles.header}`}
      //   style={{ '--bc': 'red' }}
     >
        <div className={styles.logo}>logo</div>
        <nav>
           <a href="#">home</a>
           <a href="#">about</a>
           <a href="#">contact</a>
        </nav>
    </header>
  )
}
