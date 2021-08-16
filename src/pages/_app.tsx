import { Header } from "../components/Header"

import { Footer } from "../components/Footer"
import App from 'next/app'
import { GlobalStyle } from "../styles/global"
import { AuthProvider } from "../services/contexts/AuthContext"
  
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
    <AuthProvider>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    <GlobalStyle/>
    
    </AuthProvider>
    )

  }
}