import './App.css'
import CharacterList from './components/CharacterList'
import CharacterDetail from './components/CharacterDetail'
import { useState } from 'react'

function App() {
const [selectedHero, setSelectedHero] = useState(null);

  return (
    <>
    <div className="mainContainer">
      <CharacterList onHeroSelect={setSelectedHero}/>
    </div>
      <CharacterDetail characterId={selectedHero}/>
    </>
  )
}

export default App
