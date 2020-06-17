import React, { useEffect, useState } from 'react'
import Page from '../components/page'
import Search from '../components/search'
import Champion from '../components/champion'
import Title from '../components/title'
import { filterChampions, retrieveChampions } from '../utils/champions'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [championList, setChampionList] = useState([])
  const [filteredChampionList, setFilteredChampionList] = useState([])

  useEffect(() => {
    async function pullData() {
      const champions = await retrieveChampions()

      setChampionList(champions)
      setFilteredChampionList(champions)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterChampions(championList, searchTerm)

    setFilteredChampionList(filtered)
  }, [searchTerm])


  return (
    <Page>
      <Title />
      <Search term={searchTerm} setter={setSearchTerm} />
      <button type="button" onClick={() => { setSearchTerm('') }}>clear</button>
      {
        filteredChampionList.map(champion => (
          <Champion
            className="champName"
            key={champion.id}
            id={champion.id}
            name={champion.name}
          />
        ))
      }
    </Page>
  )
}
