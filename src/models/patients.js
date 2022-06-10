'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class patients extends Model {
    static associate(models) {}
  }
  patients.init(
    {
      ho: DataTypes.STRING,
      ten: DataTypes.STRING,
      gioitinh: DataTypes.STRING,
      namsinh: DataTypes.STRING,
      sohoso: DataTypes.STRING,
      sodienthoai: DataTypes.STRING,
      ngaynhanhen: DataTypes.DATE,
      ngayhendo: DataTypes.DATE,
      tinhtrangdo: DataTypes.STRING,
      khoaphong: DataTypes.STRING,
      loaichidinh: DataTypes.STRING,
      ngaydo: DataTypes.DATE,
      kythuavien: DataTypes.STRING,
      bacsi: DataTypes.STRING,
      ghichu: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
      image: DataTypes.BLOB('long'),
    },
    {
      sequelize,
      modelName: 'patients',
    }
  )
  return patients
}
