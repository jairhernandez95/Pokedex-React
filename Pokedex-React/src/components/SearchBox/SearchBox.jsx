import React from 'react'

const SearchBox = ({onSearch}) => {

  return (
    <form>
      <input type="text" placeholder='Pokemon' onChange={onSearch}/>
    </form>
  )
}

export default SearchBox