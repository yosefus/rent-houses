import styles from './style.module.scss'
import { IoMdMenu } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";


export default function Navbar() {
   return (
      <header className={`${styles.header}`}>
         <div className={styles.btns}>
            <button><IoMdMenu /></button>
            <button><GrLanguage /></button>
         </div>
         <div className={styles.logo}><img src="vite.svg" alt="logo" /></div>
      </header>
   )
}
