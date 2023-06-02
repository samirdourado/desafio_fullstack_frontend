import { AuthProvider } from '@/contexts/authContext'
import '@/styles/globals.css'
import '@/styles/dashboard.css'
import '@/styles/buttons.css'
import '@/styles/card.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
    </>

  ) 
}
