import { Header } from "../components/Header"
import "../styles/global.css"

import App from 'next/app'
  
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
    <>
    <Header/>
    <Component {...pageProps} />
    
    </>
    )

  }
}