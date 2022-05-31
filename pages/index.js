import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from  './components/Content'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}
