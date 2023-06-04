import { AuthProvider } from '@/contexts/authContext'
import '@/styles/globals.css'
import '@/styles/dashboard.css'
import '@/styles/buttons.css'
import '@/styles/card.css'
import '@/styles/modal.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { AuthProviderContact } from '@/contexts/contactContext'

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
          <AuthProviderContact>
            <Component {...pageProps} />
          </AuthProviderContact>
        </AuthProvider>
    </>

  ) 
}
