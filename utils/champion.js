import fetchInfoForChampion from '../actions/champion'

export const getChampionIdFromUrl = location => (location && location.pathname
  ? location.pathname.split('/').pop()
  : ''
)

export const retrieveChampion = async (location) => {
  const championName = getChampionIdFromUrl(location)

  if (!championName) return { id: 0, details: {}, info: [] }

  const { id, name, region, roles } = await fetchInfoForChampion(championName)

  if (!id || !name || !region || !roles) return { details: {}, info: [] }

  return { id, details: { id, name, region, roles } }
}
