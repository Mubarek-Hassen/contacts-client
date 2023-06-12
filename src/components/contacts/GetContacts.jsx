import axios from 'axios'
import React, { useEffect, useState } from 'react'

function GetContacts() {
  const [contacts, setContacts] = useState()
  const fetchContacts = async ()=>{
    try {
      const res = await axios.get("http://localhost:4000/contacts");
      console.log(res)
      setContacts(res)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    fetchContacts()
  },[])
  return (
    <section>
      
    </section>
  )
}

export default GetContacts