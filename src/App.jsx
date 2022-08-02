import "./App.scss"
import React, { useState } from "react"
import Users from "./users"
// const greeting = "Welcome Southen_soul"
const App = () => {
  const [contacts, setContacts] = useState(Users)
  const [dark, setDark] = useState(false)

  const handleDark = () => {
    const body = document.querySelector("body")
    body.classList.toggle("dark")
    setDark(!dark)
  }

  return (
    <div className="container-sm">
      <nav className="d-flex justify-content-end">
        <i className="ms-3" onClick={handleDark}>
          {dark ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </i>
      </nav>
      <SearchInput
        onChange={(input) =>
          setContacts(
            Users.filter(
              (contact) =>
                contact.first_name
                  .toLowerCase()
                  .includes(input.toLowerCase()) ||
                contact.last_name.toLowerCase().includes(input.toLowerCase())
            )
          )
        }
      />
      <h1 className="mx-auto">Phone Book</h1>
      <ul>
        {contacts.map((User, i) => (
          <ContactComp User={User} key={i} />
        ))}
      </ul>
    </div>
  )
}
export default App

const SearchInput = ({ onChange }) => {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        style={{ color: "gray" }}
        type="search"
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </form>
  )
}

const ContactComp = ({ User }) => {
  return (
    <div>
      <ul>
        <li>
          {User.first_name} {User.last_name}
        </li>
      </ul>
    </div>
  )
}

//  const [contacts, setContacts] = useState([])
//  const [contact, setContact] = useState("")

//  const handleSubmit = (e) => {
//    e.preventDefault()
//    setContacts([contact, ...contacts])
//    setContact("")
//  }

//  return (
//    <div className="App">

//      <h1>Contact Lists</h1>
//      <form className="form" onSubmit={handleSubmit}>
//        <input
//          type="text"
//          value={contact}
//          onChange={(e) => setContact(e.target.value)}
//          className="form-control"
//        />
//      </form>
//      <ul className="list">
//        {contacts.map((contact, i) => (
//          <li className="list-item" key={i}>
//            {contact}
//            <i
//              onClick={() => {
//                setContacts(contacts.filter((i) => i !== contact))
//              }}
//              className="fas fa-trash"
//            ></i>
//          </li>
//        ))}
//      </ul>
//    </div>
//  )
