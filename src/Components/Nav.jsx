import React from 'react'
import {headerLogo} from '../assets/images'
import  {navLinks} from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-center items-center max-container '>
      <a href='/'>
        <img
          src={headerLogo}
          alt='logo'
          width={120}
          height={29}
          className='m-0 w-[129px] h-[29px]'
        />
      </a>
      <ul className='flex-1 flex justify-center gap-16 max-lg:hidden'>
      {navLinks.map((items) => (
        <li key= {items.label}>
         <a href={items.label}
         className='font-monts errat leading-normal text-lg text-slate-gray'
         >
          {items.label}
         </a>
        </li>
      ))}
      </ul>
      
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
        </nav>  
    </header>
  )
}

export default Nav