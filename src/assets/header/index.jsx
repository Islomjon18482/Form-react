import React from 'react'
import "./index.css"

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
        <p className='logo'>Darkor</p>
        </div>
        <div className="nav__bar">
            <ul className='header_nav'>
                <li className='list'>Vakansiyalar</li>
                <li className='list'>Kandidatlar</li>
                <li className='list'>Kompaniyalar</li>
                <li className='list'>Xizmatlar</li>
                <li className='list'>Ta’lim</li>
            </ul>
        </div>
        <div className="buttonsHeader buttons">
            <button className='change'>O’zb</button>
            <button className='color'>Boshlash</button>
        </div>
      </div>
    </>
  )
}
