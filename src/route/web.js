import express from 'express'
// import multer from 'multer';
// import path from 'path';
// var appRoot = require('app-root-path');
import {
  getHomePage,
  handleSave,
  handleDelete,
  getOne,
  getUploadFilePage,
  handleUploadFile,
  handleUploadMultipleFile,
  handlePut,
  handleGet,
  handlePutStatusOn,
  handlePutStatusOff,
  handleGetStatusOff,
} from '../controllers/patientController.js'
let router = express.Router()





let initWebRoutes = (app) => {
  router.get('/', getHomePage)
  router.get('/api/get', handleGet)
  router.get('/api/get/statusoff', handleGetStatusOff)
  router.get('/getone', getOne)
  router.get('/upload', getUploadFilePage);
  router.post('/upload-profile-pic',  handleUploadFile)
  router.post('/upload-multiple-images',  handleUploadMultipleFile)
  router.post('/api/save', handleSave)
  router.delete('/api/delete', handleDelete)
  router.put('/api/put', handlePut)
  router.put('/api/put/statuson', handlePutStatusOn)
  router.put('/api/put/statusoff', handlePutStatusOff)
  return app.use('/', router)
}
export default initWebRoutes
