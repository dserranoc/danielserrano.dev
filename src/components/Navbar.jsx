import { useState } from 'preact/hooks'
import { FaBars, FaTimes } from 'react-icons/fa'
export const Navbar = () => {

  const [isShown, setIsShown] = useState(false)

  const toggleNav = (state) => {
    const body = document.querySelector("body")


    if (!body.classList.contains('fixed')) {
      body.classList.add('fixed')
    } else {
      body.classList.remove('fixed')
    }
    setIsShown(state)
  }

  return (
  <nav class="flex justify-between items-center w-full h-20 px-4 text-gray-500 fixed">
    <div>
      <h1 class="text-4xl ml-2">danielserrano.dev</h1>
    </div>
  
    <ul id='menu-desktop' class="hidden md:flex">
      <li class="px-4 font-medium hover:scale-105 duration-200">
        <a href="#">Inicio</a>
      </li>
      <li class="px-4 font-medium hover:scale-105 duration-200">
        <a href="#portfolio">Proyectos</a>
      </li>
      <li class="px-4 font-medium hover:scale-105 duration-200">
        <a href="#experience">Experiencia</a>
      </li>
      <li class="px-4 font-medium hover:scale-105 duration-200">
        <a href="#contact">Contacto</a>
      </li>
    </ul>
  
    <div onClick={() => toggleNav(!isShown)} class="cursor-pointer pr-4 z-10 text-gray-500 md:hidden" id={"menu-icon"}>
      {isShown ? <FaTimes size={30} class={"text-white"}/> : <FaBars size={30} />}
    </div>

    {isShown && (
      <ul id='menu-mobile' class="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-500 to-gray-600 bg-opacity-90 text-white">
      <li class="px-4 py-6 text-4xl"><a href="#" onClick={() => toggleNav(!isShown)}>Inicio</a></li>
      <li class="px-4 py-6 text-4xl"><a href="#portfolio" onClick={() => toggleNav(!isShown)}>Proyectos</a></li>
      <li class="px-4 py-6 text-4xl"><a href="#experience" onClick={() => toggleNav(!isShown)}>Experiencia</a></li>
      <li class="px-4 py-6 text-4xl"><a href="#contact" onClick={() => toggleNav(!isShown)}>Contacto</a></li>
    </ul>
    )}
  </nav>  
  )

}

