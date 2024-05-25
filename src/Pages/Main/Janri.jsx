import React from 'react'

export default function Janri(props) {
    const arrJanri = props.janri
  return (
    <div className='genre'>
       <ul className='genre__ul'>
            {arrJanri.map(el=> <li className='genre__li' key={el}>{el}</li>)}
       </ul>
    </div>
  )
}
