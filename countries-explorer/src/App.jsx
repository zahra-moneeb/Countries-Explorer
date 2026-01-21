import { useState } from 'react'
import SearchField from './component/SearchField'
import './App.css'

function App() {
  const [searchCountries, setSearchCountries] = useState("");

  return (
    <>
      <SearchField searchCountries={searchCountries} setSearchCountries={setSearchCountries} />
    </>
  )
}

export default App
