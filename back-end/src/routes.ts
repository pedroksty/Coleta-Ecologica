import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import ItemsController from './controllers/itemsController'
import PointsControllers from './controllers/PointsController'

const routes = express.Router()

const upload = multer(multerConfig)

routes.get('/', (req, res) => {
  res.json({ server: 'on' })
})

routes.get('/items', ItemsController.index)

routes.post('/points', upload.single('image'), PointsControllers.create)
routes.get('/points/:id', PointsControllers.show)
routes.get('/points', PointsControllers.index)

export default routes
