const Router = require('express')
const router = new Router
const smellController = require('../controllers/smellController')

router.post('./', smellController.add)
router.get('./', smellController.getAll)
router.delete('./', smellController.delete)

module.export = router
