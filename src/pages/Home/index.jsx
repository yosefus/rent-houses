import styles from './style.module.scss'
import data from '../../data.json'
import { Link } from 'react-router-dom'
export default function Home() {
   return (
      <main className={`${styles.content}`}>
        {data.map((item) => (
           <Link to={`/house/${item.id}`} className={styles.card} key={item.id}>
              <img src={item.images[0]} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.location}</p> 
          </Link>
        ))}
      </main>
   )
}
