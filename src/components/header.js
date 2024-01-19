import React from 'react'

const Header = ({ handleToggleDarkmode }) => {
  return (
      <div className='header'>
          <h1>Noted</h1>
          <button button onClick={() => handleToggleDarkmode(
              (previousDarkMode) => !previousDarkMode)} className='note-save'>Toggle Theme</button>
    </div>
  )
}

export default Header