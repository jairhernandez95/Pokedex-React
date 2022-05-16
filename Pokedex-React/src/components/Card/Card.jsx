import React from 'react'

const Card = ( {element} ) => {
  return (
    <div>
      {/* <a href={element.url}><p>{element.name}</p></a> */}
      <p>Tarea número: {element.numero}</p>
      <p>{element.fecha}</p>
      <p>Id: {element.id}</p>
    </div>
  )
}

export default Card