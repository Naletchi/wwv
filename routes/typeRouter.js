const Router = require('express')
const router = new Router
const typeController = require('../controllers/typeController')

router.post('./', typeController.add)
router.get('./', typeController.getAll)
router.delete('./', typeController.delete)

module.export = router
