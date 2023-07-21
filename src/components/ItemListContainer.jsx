import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const productos = [
    { id: 1, nombre: "Producto A", description: "Descripcion de Producto A", stock: 5 },
    { id: 2, nombre: "Producto B", description: "Descripcion de Producto B", stock: 10 },
    { id: 3, nombre: "Producto C", description: "Descripcion de Producto C", stock: 20 }
  ]

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getProductos
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })



  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer