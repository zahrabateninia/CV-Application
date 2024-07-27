import React from 'react'
import InputGroup from './InputGroup'

const PersonalDetailsForm = () => {
  return (
   <form className='personal-details-form'>
    <inputGroup 
        type="text"
        id="full-name"
        labelText="Full name"
        placeholder="Zac Efron"
    />
    <InputGroup 
         type="email"
         id="email"
         labelText="Email"
         placeholder="zacEfron@email.com"
    />
    <InputGroup 
        type="tel"
        id="phone-number"
        labelText="Phone number"
        placeholder="555-555-1212"
    />
       <InputGroup 
        type="text"
        id="address"
        labelText="Address"
        placeholder="City, Country"
    />
   </form>
  )
}

export default PersonalDetailsForm
