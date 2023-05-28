const Persons = (props) => {
    const filterPerson = props.persons.filter((person) => person.name.toLocaleLowerCase().search(props.search.toLowerCase()) >=0 )
    const personToShow = props.search.length === 0 ? props.persons : filterPerson

    const allNames = personToShow.map((person) => 
      <p key={[person.id]}>{person.name} {person.number}</p>
    ) 



    return (
      <>
      {allNames}
      </>
    )
}

export default Persons