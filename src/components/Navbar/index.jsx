import styles from './style.module.scss'
import { IoMdMenu } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { useUserStore } from '../../store';


export default function Navbar() {
   const login = useUserStore(state=> state.login)
   const logout = useUserStore(state=> state.logout)

   return (
      <header className={`${styles.header}`}>
         <div className={styles.btns}>
            <button onClick={()=> login({name: 'yosef', age: 12})}><IoMdMenu />login</button>
            <button onClick={logout}><GrLanguage />logout</button>
         </div>
         <div className={styles.logo}><img src="vite.svg" alt="logo" /></div>
      </header>
   )
}
