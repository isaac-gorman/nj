import '../styles/globals.css'
import Nav from '../src/components/nav'


function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Nav/>
      <Component {...pageProps} />
    </div>
  )
  
  
}

export default MyApp
