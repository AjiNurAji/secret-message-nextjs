import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { ToastContainer } from 'react-toastify';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position='top-right' theme='dark' autoClose={5000} />
    </>
  )
}
