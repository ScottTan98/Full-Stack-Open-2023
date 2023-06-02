const Person = (props) => {

    return (
      <div>
        <p>{props.person.name} {props.person.number}
          <button onClick={props.deletePerson}>delete</button>
        </p>
      </div>
    )
}

export default Person