import db from '../models/index.js'
import { Op } from 'sequelize'
import multer from 'multer'
import path from 'path'
import appRoot from 'app-root-path'
import moment from 'moment'
// import path from 'path'
let getHomePage = async (req, res) => {
  try {
    let data = await db.patients.findAll()
    return res.render('homepage.ejs', { data: JSON.stringify(data) })
  } catch (e) {
    console.log(e)
  }
}
let handleGet = async (req, res) => {
  try {
    let data = await db.patients.findAll({
      order: [['id', 'DESC']],
      where: { status: true },
    })
    return res.status(200).json(data)
  } catch (e) {
    console.log(e)
  }
}

let getUploadFilePage = async (req, res) => {
  return res.render('uploadFile.ejs')
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appRoot + '/src/public/image/')
    // console.log(appRoot)
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname +
        '-' +
        moment(Date.now()).format('YYYY-MM-DD HH-mm-ss-SSS') +
        path.extname(file.originalname)
    )
  },
})

const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = 'Only image files are allowed!'
    return cb(new Error('Only image files are allowed!'), false)
  }
  cb(null, true)
}
let handleUploadFile = async (req, res) => {
  let upload = multer({ storage: storage,  fileFilter: imageFilter }).single('file')
  upload(req, res, function (err) {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError)
    } else if (!req.file) {
      return res.send('Please select an image to upload')
    } else if (err instanceof multer.MulterError) {
      return res.send(err)
    } else if (err) {
      return res.send(err)
    }
    console.log(req) 
    res.send(req.file)
  })
}

let handleUploadMultipleFile = async (req, res) => {
  let upload = multer({ storage: storage, fileFilter: imageFilter }).array('multiple_images', 4)

  upload(req, res, function (err) {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError)
    } else if (!req.files) {
      return res.send('Please select an image to upload')
    } else if (err instanceof multer.MulterError) {
      return res.send(err)
    } else if (err) {
      return res.send(err)
    }

    let result = 'You have uploaded these images: <hr />'
    const files = req.files
    // console.log('>>>check files',files)
    let index, len
    for (index = 0, len = files.length; index < len; ++index) {
      result += `<img src="/image/${files[index].filename}" width="300" style="margin-right: 20px;">`
    }
    result = '<hr/><a href="/upload">Upload more images</a>' + result
    res.send(result)
  })
}

let handleGetStatusOff = async (req, res) => {
  try {
    let data = await db.patients.findAll({
      order: [['id', 'DESC']],
      where: { status: false },
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
      gioitinh: req.body.gioitinh,
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
      status: req.body.status === 1 ? true : false,
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
        gioitinh: req.body.gioitinh,
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
        status: req.body.status === 1 ? true : false,
        image: req.body.image,
      },
      { where: { id: req.body.id } }
    )
    return res.status(200).json(message)
  } catch (e) {
    console.log(e)
  }
}

let handlePutStatusOn = async (req, res) => {
  try {
    let message = await db.patients.update(
      {
        status: true,
      },
      { where: { id: req.body.id } }
    )
    return res.status(200).json(message)
  } catch (e) {
    console.log(e)
  }
}
let handlePutStatusOff = async (req, res) => {
  try {
    let message = await db.patients.update(
      {
        status: false,
      },
      { where: { id: req.body.id } }
    )
    return res.status(200).json(message)
  } catch (e) {
    console.log(e)
  }
}

export {
  getHomePage,
  handleGet,
  handleSave,
  handleDelete,
  getOne,
  getUploadFilePage,
  handleUploadFile,
  handleUploadMultipleFile,
  handlePut,
  handlePutStatusOn,
  handlePutStatusOff,
  handleGetStatusOff,
}
