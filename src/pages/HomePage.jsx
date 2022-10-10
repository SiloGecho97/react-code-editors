import React from 'react'
import About from '../components/About'
import NameForm from '../components/forms/NameForm'
import Header from '../components/layouts/Header'
import ReactHook from '../components/ReactHook'

const HomePage = () => {


const navigation = [
    { name: 'Product', href: '/product' },
    { name: 'Features', href: '/features' },
    { name: 'Marketplace', href: '/market' },
    { name: 'Company', href: '/company' },
  ]
  const nav2 = [
    { name: 'Abush', href: '/product' },
    { name: 'Kena', href: '/features' },
    { name: 'Silo', href: '/market' },
    { name: 'Company', href: '/company' },
  ]

  return (
    <div>
        
        <Header navigation={navigation} />
        <NameForm/>
        <About/>
        <ReactHook/>
    </div>
  )
}

export default HomePage