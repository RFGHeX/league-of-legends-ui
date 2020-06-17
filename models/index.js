import Sequelize from 'sequelize'
import regionsModels from './regions'
import championsModels from './campions'
import rolesModels from './roles'
import championRolesModels from './championRoles'
import allConfigs from '../config/sequelize'

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const regions = regionsModels(connection, Sequelize)
const champions = championsModels(connection, Sequelize, regions)
const roles = rolesModels(connection, Sequelize)
const championRoles = championRolesModels(connection, Sequelize, roles, champions)

regions.hasMany(champions)
champions.belongsTo(regions)

champions.belongsToMany(roles, { through: championRoles })
roles.belongsToMany(champions, { through: championRoles })

export default {
  regions, champions, roles, championRoles, Op: Sequelize.Op,
}
