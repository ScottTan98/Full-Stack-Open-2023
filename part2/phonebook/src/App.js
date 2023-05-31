import { useState, useEffect } from 'react'
import Search from './components/Search'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])
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