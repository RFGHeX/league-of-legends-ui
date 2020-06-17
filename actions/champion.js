import axios from 'axios'

export default async (name) => {
  const { data } = await axios.get(`${API_BASE_URL}/lol/champions/${name}`) // eslint-disable-line no-undef

  return data
}
