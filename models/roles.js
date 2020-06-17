export default (connection, sequelize) => connection.define('roles', {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  role: { type: sequelize.STRING, allowNull: false },
}, {
  defaultScope: {
    attributes: { exclude: ['deletedAt'] },
  },
}, {
  paranoid: true,
})
