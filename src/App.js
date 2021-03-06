import React, { useState } from 'react'
import Header from './components/Header/Header'
import PlaceList from './components/PlaceList/PlaceList'
import placesDataJSON from './challenge/stays.json'
import './App.css'

const App = () => {
  const [placesData, setPlacesData] = useState(placesDataJSON)
  const [citySelected, setCitySelected] = useState('')
  const [fullHeader, setFullHeader] = useState(false)

  const handleSearch = (data) => {
    const dataJSON = placesDataJSON
    let newData = dataJSON
    if (data.place) {
      newData = newData.filter((place) => place.city === data.place)
      setCitySelected(data.place)
    }
    if (data.people !== 'Add people') {
      newData = newData.filter(
        (place) => place.maxGuests >= Number(data.people)
      )
    }
    setPlacesData(newData)
  }

  return (
    <div className={fullHeader ? 'App bg_changed' : 'App'}>
      <Header
        search={handleSearch}
        fullHeader={fullHeader}
        setFullHeader={setFullHeader}
      />
      <PlaceList list={placesData} city={citySelected} />
    </div>
  )
}

export default App
