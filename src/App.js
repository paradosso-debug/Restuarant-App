import React, { useState } from 'react'
import { db } from './firebase'
import './App.css'
import './App.media.css'
import Menu from './Menu.js'

import { collection, addDoc, } from 'firebase/firestore'


function App({ name: Name, phone: Phone, email: Email, date: Date, comments: Comments }) {

  const [name, setName] = useState(Name || '')
  const [phone, setPhone] = useState(Phone || '')
  const [email, setEmail] = useState(Email || '')
  const [date, setDate] = useState(Date || '')
  const [comments, setComments] = useState(Comments || '')

  const createDoc = async () => {
    const customer = { name, phone, email, date, comments }
    await addDoc(collection(db, 'customer'), customer)
    setName('')
    setPhone('')
    setEmail('')
    setDate('')
    setComments('')
  }



  return (
    <div className='App'>

      {/* HEADER */}
      <header className='logo'> Yoi Sushi
        <div className='options'>
          <a href='' className='our-menu'>Our Menu</a>
          <a href='' className='reservations'>Reservations</a>
          <a href='' className='faq'>FAQ</a>
        </div>
      </header>


      {/* IMAGE */}
      <img src='https://media.istockphoto.com/id/521800854/photo/close-up-of-sashimi-sushi-set-with-chopsticks-and-soy.jpg?s=612x612&w=0&k=20&c=RoQuV_3WXfYofhGeoQyXg0soVMOFTWUNXXuZytSfhHA=' className='picture'></img>


      {/* MAIN */}
      <main className='main'>
        <div>
          <h1 className='irasshaimase'>Irasshaimase!</h1>
          <p className='message'>Welcome to our sushi restaurant! We are thrilled to offer you a unique dining experience with our traditional and contemporary Japanese cuisine. Our menu features a variety of sushi rolls, sashimi, bento boxes, and other specialties, all made with the freshest ingredients and traditional techniques. Whether you're a sushi lover or trying it for the first time, we're confident you'll enjoy your time with us. Come join us and taste the difference.</p>
          <img className='picture2' src='https://cdn.pixabay.com/photo/2019/08/09/18/32/sushi-roll-images-4395598__480.jpg'></img>
        </div>
      </main>

      <div>

        <Menu
          name="Dragon Roll"
          discreption="What is a dragon roll made of?
          Image result for description of a dragon sushi roll
          The festive dragon roll is a tasty uramaki sushi roll featuring avocado, unagi, and shrimp tempura."
          price={20}
        />
        <img className='sushi-menu' src='https://media.istockphoto.com/id/1265011031/photo/sushi-roll-red-dragon-on-black-background.jpg?b=1&s=170667a&w=0&k=20&c=ABoE8ZD8mxDUzGE9rRNXwNg8ul5Tj0IVEeE9eyneurA='></img>
        <Menu
          name="Sashimi"
          discreption="Sashimi is raw fish, served in long rectangular slices known as hira-zukuri."
          price={30}
        />

        <img className='sushi-menu' src='https://cdn.pixabay.com/photo/2019/04/23/13/22/sushi-4149521__480.jpg'></img>

        <Menu
          name="Nigiri"
          discreption="Nigiri is a type of sushi made up of molded structures of vinegared rice topped with slices of raw fish."
          price={35}
        />

        <img className='sushi-menu' src='https://media.istockphoto.com/id/1345901125/es/foto/sushi-japon%C3%A9s-en-el-plato-con-estilo-minimalista.jpg?s=612x612&w=0&k=20&c=MQf46sQwzPe0vDvDQu11--wC4SHCaAn-eIgwSrrZwmE='></img>
      </div>

      {/* RESERVATION SECTION */}
      <section>
        <h1 className='reserve'>Reservations</h1>
      </section>
      <div className='input-section'>
        <input className='inputs' onChange={(e) => setName(e.target.value)} value={name} type='text' name='' id='' placeholder='Name' />
        <input className='inputs' onChange={(e) => setPhone(e.target.value)} value={phone} type='number' name='' id='' placeholder='Phone number' />
        <input className='inputs' onChange={(e) => setEmail(e.target.value)} value={email} type='text' name='' id='' placeholder='Email' />
        <input className='inputs' onChange={(e) => setComments(e.target.value)} value={comments} type='text' name='' id='' placeholder='Comments' />
        <input className='inputs' onChange={(e) => setDate(e.target.value)} value={date} type='datetime-local' name='' id='' placeholder='' />
      </div>
      <button className='send' onClick={createDoc}>Send</button>
      <section>
        <h2 className='message2'>Reserve with us now! We have great deals on every day of the week. We also host parties,weddings, any type of gathering you can imagine. contact us for more details.</h2>
        <h3 className='message3'>Location Roma Norte Mexico City Durango 123 st.</h3>
        <h3 className='message3'>Contact us via email or phone.</h3>
        <h4 className='message3'>Email: YoiSushi@gmail.com</h4>
        <h4 className='message3'>Phone Number: 09876</h4>

      </section>
      {/* FOOTER */}
      <footer className='footer'>
        <div>
          <ul className='footer-options'>
            <li >Home </li>
            <li >Menu </li>
            <li >About Us </li>
            <li >Locations </li>
          </ul>
        </div>
        <div>
          <p>&copy; 2023 Sushi Restaurant</p>
        </div>
      </footer>
    </div>

  )

}


export default App
