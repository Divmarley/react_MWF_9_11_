import React from 'react'

export default function AppInput({name,id,type,placeholder,onChange}) {
  return (
    <div className='form-group'>
    <input
      className='form-control'
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
  )
}
