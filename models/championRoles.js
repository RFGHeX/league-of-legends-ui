/* eslint-disable max-len */
export default (connection, sequelize, roles, champions) => connection.define('championRoles', {
  roleId: { type: sequelize.INTEGER, primaryKey: true, allowNull: false, references: { model: roles, key: 'id' } },
  championId: { type: sequelize.INTEGER, primaryKey: true, allowNull: false, references: { model: champions, key: 'id' } },
}, {
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
}, {
  paranoid: true,
})
