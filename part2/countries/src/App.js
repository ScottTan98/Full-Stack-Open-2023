import { useState, useEffect} from 'react'
import axios from 'axios'


function App() {


  const [searchCountries, setSearchCounties] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(res => setCountries(res.data))
  }, [])

  const handleInput = (event) => {
    setSearchCounties(event.target.value)
  }

  const filtedCountries = countries.filter(country => country.name.common.toLowerCase().search(searchCountries.toLowerCase()) >= 0)


  const ShowResult = ({filtedCountries}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [apiData, setApiData] = useState(null)

    useEffect(() => {
      if (filtedCountries.length === 1){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${filtedCountries[0].capital}&appid=${api_key}`)
        .then(res => setApiData(res.data))
      }
    }, [api_key, filtedCountries])

    if (filtedCountries.length < 10) {
      if (filtedCountries.length === 1 && apiData ) {
        const country = filtedCountries[0]
        const countryLanguages = country.languages
        const countryFlag = country.flags.png
        const temp = (apiData.main.temp) - 273.15
        const weatherPic = `https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`


        return (
          <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <b>languages:</b>
            <ul >
              {Object.keys(countryLanguages).map(key => <li key={countryLanguages[key]}>{countryLanguages[key]}</li>)}
            </ul>
            <img src={countryFlag} alt={country.name.common}/>
            <br/>
            <b>Weather in {country.capital}</b>
            <p>temperature {temp.toFixed(2)} Celcius</p>
            <img src={weatherPic} alt={apiData.weather[0].description} />
            <p>wind {apiData.wind.speed} m/s</p>
          </div>
        )
      }
      return (
        <>
        {filtedCountries.map(country => 
        <div key={country.name.common}>{country.name.common} 
        <button value={country.name.common} onClick={(e) => setSearchCounties(e.target.value)}>show</button></div>
        )}
        
        </>
      )
    } 
      return (
        <>
          <div>
            Too many matches, specify another filter
          </div>
        </>
      )
  }

  return (
    <>
      <div>
        find countries <input
        value={searchCountries}
        onChange={handleInput}
        />
        <ShowResult filtedCountries={filtedCountries}/>
      </div>
    </>
  );
}


export default App;
