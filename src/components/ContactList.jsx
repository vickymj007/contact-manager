import React from 'react'
import ContactCard from './ContactCard'

const ContactList = () => {

  return (
    <div className='wrapper'>
        <ContactCard name='Ajay' number='9965852189' relation='Friend'/>
        <ContactCard name='Michael' number='9965845458' relation='Friend'/>
        <ContactCard name='Tom' number='9754865561' relation='Uncle'/>
        <ContactCard name='Joseph' number='9236545856' relation='Brother'/>
        <ContactCard name='Jane' number='9654865842' relation='Wife'/>
        <ContactCard name='Kamal' number='9965425648' relation='Father'/>
    </div>
  )
}

export default ContactList