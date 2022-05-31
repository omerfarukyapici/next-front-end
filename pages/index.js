import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className=''>
        <ul className='flex justify-center'>
          <li className='px-10'>
            <a href='components/HomePage'>Home Page</a>   
          </li>
          <li className='px-10'>
            <a href='components/Contact'>Contact Page</a>   
          </li>
          <li className='px-10'>
            <a href='components/Product'>Product Page</a>   
          </li>
        </ul>
      </div>
    </div>
  )
}
