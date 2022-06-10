'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ho: { type: Sequelize.STRING },
      ten: { type: Sequelize.STRING },
      gioitinh: { type: Sequelize.STRING },
      namsinh: { type: Sequelize.INTEGER },
      sohoso: { type: Sequelize.STRING },
      sodienthoai: { type: Sequelize.STRING },
      ngaynhanhen: { type: Sequelize.DATE },
      ngayhendo: { type: Sequelize.DATE },
      tinhtrangdo: { type: Sequelize.STRING },
      khoaphong: { type: Sequelize.STRING },
      loaichidinh: { type: Sequelize.STRING },
      ngaydo: { type: Sequelize.DATE },
      kythuavien: { type: Sequelize.STRING },
      bacsi: { type: Sequelize.STRING },
      ghichu: { type: Sequelize.TEXT },
      image: {
        type: Sequelize.BLOB('long'),
      },
      status: { type: Sequelize.BOOLEAN },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('patients')
  },
}
