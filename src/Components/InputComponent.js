import React from 'react'

function InputComponent({placeholder,value,onchange}) {
  return (
    
        <input className='inputbox me-3'placeholder={placeholder} value={value} onChange={onchange}/>
   
  )
}

export default InputComponent