import styles from './style.module.scss'
import data from '../../data.json'
import { useUserStore } from '../../store'
export default function Content() {


   return (
      <>
         <h1>{user?.name}</h1>
         <main className={`${styles.content}`}>
            {data.map((item) => (
               <div className={styles.card} key={item.id}>
                  <img src={item.images[0]} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
               </div>
            ))}
         </main>
      </>
   )
}
