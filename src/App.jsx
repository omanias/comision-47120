import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

const App = () => {

  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemCount />
    </>
  )
}

export default App