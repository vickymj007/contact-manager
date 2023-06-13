import React from 'react'

const ContactCard = ({name, number, relation}) => {

  return (
    <div className='card'>
        <h2>👤{name}</h2>
        <h4>📞{number}</h4>
        <p>Relation: {relation}</p>
        <button className='btn edit-btn'>Edit</button>
        <button className='btn delete-btn'>Delete</button>
    </div>
  )
}

export default ContactCard