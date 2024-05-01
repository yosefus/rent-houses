import styles from './style.module.scss'
import data from '../../data.json'
import { Link } from 'react-router-dom'
import { useUserStore } from '../../store';

export default function Home() {
   const user = useUserStore(state => state.user)

   return (
      <>
         <h1>{user?.name}</h1>
         <main className={`${styles.content}`}>
            {data.map((item) => (
               <Link to={`/house/${item.id}`} className={styles.card} key={item.id}>
                  <img src={item.images[0]} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
               </Link>
            ))}
         </main>
      </>
   )
}
