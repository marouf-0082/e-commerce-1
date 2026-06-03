import React from 'react'
import Nav from '../header/Nav'
import Home from '../../pages/Home'
import Footer from '../footer/Footer'

interface ILayout {
    children: React.ReactNode
}

function Layout({children}: ILayout) {
  return (
    <>
    <Nav/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout