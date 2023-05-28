const Search = (props) => {
    return(
        <div>
            filter shown with <input 
            value={props.search}
            onChange={props.handleSearch} 
            />
      </div>
    )
}

export default Search