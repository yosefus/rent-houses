import styles from './style.module.scss'
import { IoMdMenu } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { useUserPrefStore, useUserStore } from '../../store';
import translate from './translate.json'

export default function Navbar() {
   const login = useUserStore(state=> state.login)
   const logout = useUserStore(state => state.logout)
   const setDark = useUserPrefStore(state => state.setDark)
   const lang = useUserPrefStore(state => state.language)


   const text = (translate[lang] ?? translate['en']) || {}
   

   return (
      <header className={`${styles.header}`}>

         {/* btns to desktop */}
         <div className={styles.btnsPc} >
            <button onClick={()=> login({name: 'yosef', age: 12})}><IoMdMenu />{text.login}</button>
            <button onClick={logout}><GrLanguage />{text.logout}</button>
            <button onClick={setDark}>{text.dark}</button>
         </div>

         {/* btns to mobile */}
         <div className={styles.btnsMobile} >
            <button onClick={logout}><GrLanguage />logout</button>
            <button onClick={setDark}>dark</button>
         </div>

         <div className={styles.logo}><img src="vite.svg" alt="logo" /></div>
      </header>
   )
}
