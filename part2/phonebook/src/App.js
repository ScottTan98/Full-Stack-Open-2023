import { useState } from 'react'
import Search from './components/Search'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '011-2222333', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personId = persons.length + 1
    const personNameNum = {name: newName, number: newNum , id: personId}
    const isInclude = persons.find(e => e.name === newName) 
    const message =  `${newName} is already added to phonebook`
    isInclude ? alert(message) : setPersons(persons.concat(personNameNum)) 
    setNewName('')
    setNewNum('')
  }


  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNum = (event) => {
    setNewNum(event.target.value)
  }
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search 
        search = {search}
        handleSearch = {handleSearch}
      />
      <h2>add a new</h2>
      <PersonForm 
        addPerson = {addPerson}
        newName = {newName}
        handleNewName = {handleNewName}
        newNum = {newNum}
        handleNewNum = {handleNewNum}
      />
      <h2>Numbers</h2>
      <Persons 
        persons = {persons}
        search = {search}
      />
    </div>
  )
}

export default App