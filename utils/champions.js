import fetchChampions from '../actions/champions'

export const filterChampions = (list, term) => list.filter(champion => (
  champion.name.toLowerCase().includes(term.toLowerCase())
))

export const retrieveChampions = async () => {
  const champions = await fetchChampions()

  return champions
}
