import Image from 'next/image'
import style from './page.module.css'
import Login from './login'

export default function Home() {
  return (
    <div style={{ width: '500px', margin: "0 auto", paddingTop: "30px" }}>
      <h3>Login Website</h3>
      <Login/>
    </div>
  )
}
