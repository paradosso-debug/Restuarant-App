import React, { useState } from 'react'
import { db } from './firebase'
import './App.css'

import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'


function App() {
  const [info, setInfo] = useState()
  const [nombre, setNombre] = useState()

  const getData = async () => {
    const snapshot = await getDocs(collection(db, 'customer'))
    const data = snapshot.docs.map((doc) => doc)
    setInfo(data)
  }

  let usuario = { nombre: nombre }

  const createDoc = async () => {
    await addDoc(collection(db, 'customer'), usuario)
    getData()
    setNombre('')
  }

  const handleUpdateDoc = async (id, coleccion, nombre) => {
    await updateDoc(doc(db, coleccion, id), { nombre })
    getData()
  }

  const handleDeleteDoc = async (id, coleccion) => {
    await deleteDoc(doc(db, coleccion, id))
    getData()
  }

  return (
    <div className='App'>
      <header className='logo'>Sushi Yoi
        <div className='options'>
          <a href='' className='our-menu'>Our Menu</a>
          <a href='' className='reservations'>Reservations</a>
          <a href='' className='faq'>FAQ</a>
        </div>
      </header>
      <img src='https://media.istockphoto.com/id/521800854/photo/close-up-of-sashimi-sushi-set-with-chopsticks-and-soy.jpg?s=612x612&w=0&k=20&c=RoQuV_3WXfYofhGeoQyXg0soVMOFTWUNXXuZytSfhHA=' className='picture'></img>
      <button onClick={createDoc}>Crear</button>
      <button onClick={getData}>GetDocs</button>
      <input onChange={(e) => setNombre(e.target.value)} value={nombre} type='text' name='' id='' />
      <ul>
        {info &&
          info.map((e) => {
            return (
              <li>
                {e.data().nombre}:{e.id}
                <button onClick={() => handleUpdateDoc(e.id, 'customer', nombre)}>actualizar</button>
                <button onClick={() => handleDeleteDoc(e.id, 'customer')}>borrar</button>
              </li>
            )
          })}
      </ul>
    </div>
  )
}


export default App