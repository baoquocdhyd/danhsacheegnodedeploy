import express from 'express'
import {
  getHomePage,
  handleSave,
  handleDelete,
  getOne,
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
  router.post('/api/save', handleSave)
  router.delete('/api/delete', handleDelete)
  router.put('/api/put', handlePut)
  router.put('/api/put/statuson', handlePutStatusOn)
  router.put('/api/put/statusoff', handlePutStatusOff)
  return app.use('/', router)
}
export default initWebRoutes
