import db from '../models/index.js'
import { Op } from 'sequelize'

let getHomePage = async (req, res) => {
  try {
    let data = await db.patients.findAll({
      order: [['id', 'DESC']],
    })
    return res.status(200).json(data)
  } catch (e) {
    console.log(e)
  }
}

let handleSave = async (req, res) => {
  try {
    let message = await db.patients.create({
      ho: req.body.ho,
      ten: req.body.ten,
      sohoso: req.body.sohoso,
      gioitinh: req.body.gioitinh === 1 ? true : false,
      namsinh: req.body.namsinh,
      sodienthoai: req.body.sodienthoai,
      ngaynhanhen: req.body.ngaynhanhen,
      ngayhendo: req.body.ngayhendo,
      loaichidinh: req.body.loaichidinh,
      tinhtrangdo: req.body.tinhtrangdo,
      khoaphong: req.body.khoaphong,
      ngaydo: req.body.ngaydo,
      kythuavien: req.body.kythuavien,
      bacsi: req.body.bacsi,
      ghichu: req.body.ghichu,
      image: req.body.image,
    })
    return res.status(200).json(message)
  } catch (e) {
    console.log(e)
  }
}

let handleDelete = async (req, res) => {
  try {
    let data = await db.patients.destroy({ where: { id: req.body.id } })
    return res.status(200).json(data)
  } catch (e) {
    console.log(e)
  }
}

let getOne = async (req, res) => {
  try {
    let data = await db.patients.findAll({ where: { id: req.query.id } })
    return res.status(200).json(data)
  } catch (e) {
    console.log(e)
  }
}

let handlePut = async (req, res) => {
  try {
    let message = await db.patients.update(
      {
        ho: req.body.ho,
        ten: req.body.ten,
        sohoso: req.body.sohoso,
        gioitinh: req.body.gioitinh === 1 ? true : false,
        namsinh: req.body.namsinh,
        sodienthoai: req.body.sodienthoai,
        ngayhendo: req.body.ngayhendo,
        loaichidinh: req.body.loaichidinh,
        tinhtrangdo: req.body.tinhtrangdo,
        khoaphong: req.body.khoaphong,
        ngaydo: req.body.ngaydo,
        kythuavien: req.body.kythuavien,
        bacsi: req.body.bacsi,
        ghichu: req.body.ghichu,
        image: req.body.image,
      },
      { where: { id: req.body.id } }
    )
    return res.status(200).json(message)
  } catch (e) {
    console.log(e)
  }
}
export { getHomePage, handleSave, handleDelete, getOne, handlePut }
