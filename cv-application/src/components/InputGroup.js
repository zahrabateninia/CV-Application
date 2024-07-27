import React from 'react'

const inputGroup = ({id, type, labelText, placeholder}) => {
  return (
    <div className='input-group'>
        <label htmlFor={id}>{labelText}</label>
        <input id={id} type={type} placeholder={placeholder}></input>
    </div>
  )
}

export default inputGroup
