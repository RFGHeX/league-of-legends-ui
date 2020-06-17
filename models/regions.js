export default (connection, sequelize) => connection.define('regions', {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: sequelize.STRING, allowNull: false },
}, {
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
}, {
  paranoid: true,
})
