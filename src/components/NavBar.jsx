import React from 'react'
import { NavLinks } from '../constants/index.js'

const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
            <img className='p-4' src="/logo.svg" alt="Apple logo" />
            <ul>
                {NavLinks.map(({label})=>(
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                ))
                
                }
            </ul>
            <div className='flex-center gap-3 mr-2'>
                <button>
                    <img src="/search.svg" alt="Search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart" />
                </button>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
