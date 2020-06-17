import React, { useEffect, useState } from 'react'
import Page from '../components/page'
import Title from '../components/title'
import { retrieveChampion } from '../utils/champion'
import ChampionDetails from '../components/championDetails'
import Roles from '../components/Roles'

export default ({ location }) => {
  const [championId, setChampionId] = useState(0)
  const [champion, setChampion] = useState({})
  const [championRoles, setChampionRoles] = useState([])
  const [championRegion, setChampionRegion] = useState([])

  useEffect(() => {
    async function pullData() {
      const { id, details } = await retrieveChampion(location)

      setChampionId(id)
      setChampion(details)
      setChampionRegion(details.region)
      setChampionRoles(details.roles)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      {
        championId
          ? (
            <>
              <ChampionDetails name={champion.name} region={championRegion.name} />
              <Roles championRoles={championRoles} />

            </>
          )
          : (<div>Sorry, I dont know that champion</div>)
      }
    </Page>
  )
}
