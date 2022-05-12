import React from 'react'

const SearchBox = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder='Pokemon' onChange={(event) => (event.target.value)}/>
    </form>
  )
}

export default SearchBox