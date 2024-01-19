import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ handleSearchNote }) => {
  return (
      <div className='searchBar'>
          
        <MdSearch className='search-icons' size='1.3em' />
        <input className='input' onChange={(event) => handleSearchNote(event.target.value)} type='text' placeholder='Type to Search...'></input>
      </div>
  )
}

export default Search
