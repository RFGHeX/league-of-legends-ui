import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import {
  getAllChampions,
  getChampionsByIdWithRegionAndRoles,
  postChampion,
  deleteChampion,
} from './controllers/champions'
import { getAllRegions, getRegionByIdWithChampionsAndRoles } from './controllers/regions'
import { getAllRoles, getRoleByIdWithChampionsAndRegions } from './controllers/roles'

const app = express()

app.use(express.static('public'))

app.get('/api/lol', (request, response) => response.render('index'))

app.get('/api/lol/champions', getAllChampions)
app.get('/api/lol/champions/:id', getChampionsByIdWithRegionAndRoles)

app.get('/api/lol/regions', getAllRegions)
app.get('/api/lol/regions/:id', getRegionByIdWithChampionsAndRoles)

app.get('/api/lol/roles', getAllRoles)
app.get('/api/lol/roles/:id', getRoleByIdWithChampionsAndRegions)

app.post('/api/lol/champions', bodyParser.json(), postChampion)

app.delete('/api/lol/champions/:name', bodyParser.json(), deleteChampion)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(6969, () => {
  console.log('Welcoming Legends on 6969....')// eslint-disable-line no-console
})
