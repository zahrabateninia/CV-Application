import React from 'react'

const PersonalDetailsForm = () => {
  return (
   <form className='personal-details-form'>
    <div className='input-group'>
        <label htmlFor='full-name'>Full Name</label>
        <input id='full-name' type="text" placeholder='Zac Efron'></input>
    </div>

    <div className='input-group'>
        <label htmlFor='email'>Email</label>
        <input id='email' type="email" placeholder='Example@email.com'></input>
    </div>

    <div className='input-group'>
        <label htmlFor='phone-number'>Phone Number</label>
        <input id='phone-number' type="tel" placeholder='55-555-1212'></input>
    </div>

    <div className='input-group'>
        <label htmlFor='address'>Address</label>
        <input id='address' type="text" placeholder='City, Country'></input>
    </div>

   </form>
  )
}

export default PersonalDetailsForm
