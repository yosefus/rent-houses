import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from './style.module.scss'
import { useUserPrefStore } from "../store";

export default function Layout() {
  const isDark = useUserPrefStore(state => state.isDark)
  const language = useUserPrefStore(state => state.language)
  const style = isDark ? ({ '--bg-color': '#222', '--text-color': '#fff' }) : {}
  
  return (
    <div
      className={styles.layout}
      style={{
        ...style,
        direction: language === 'he' ? 'rtl' : 'ltr'
      }}>
        <Navbar />
        <Outlet/>
    </div>
  )
}
