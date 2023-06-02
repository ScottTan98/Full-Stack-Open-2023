import { useState, useEffect } from 'react'
import Search from './components/Search'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import bookService from './services/phonebook'


const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    bookService
      .getAll()
      .then(initialPhonebook => {
        setPersons(initialPhonebook)
      })
  },[])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [search, setSearch] = useState('')


  const filterPerson = persons.filter((person) => person.name.toLocaleLowerCase().search(search.toLowerCase()) >=0 )
  const personToShow = search.length === 0 ? persons : filterPerson

  const updatePerson = (id) => {
    const person = persons.find(person => person.id === id)
    const changedNote = {...person, number: newNum}
    if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
      bookService
        .update(id, changedNote)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== id ? person: returnedPerson))
        })
    } else {
      setNewName('')
      setNewNum('')
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personNameNum = {name: newName, number: newNum }
    const isInclude = persons.find(e => e.name === newName) 
    
    isInclude ? updatePerson(isInclude.id) :
      bookService
        .create(personNameNum)
        .then(returnedPhonebook => {
          setPersons(persons.concat(returnedPhonebook))
          setNewName('')
          setNewNum('')
        })
  }

  const deletePerson = (id) => {
    const personName = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${personName.name}?`)){
      bookService
        .deletePhonebook(id)
        .then(setPersons(persons.filter(person => person.id !== id)))
    }
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
      {personToShow.map(person =>
        <Person 
          key = {person.id}
          person = {person}
          deletePerson = {()=>deletePerson(person.id)}
        />
        )}
    </div>
  )
}

export default App