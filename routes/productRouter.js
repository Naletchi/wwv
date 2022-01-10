const Router = require('express')
const router = new Router
const productController = require('../controllers/productController')

router.post('./', productController.add)
router.get('./', productController.get)
router.delete('./', productController.delete)
router.get('/:id', productController.getOne)

module.export = router
