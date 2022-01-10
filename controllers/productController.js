const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController{
  async add(req, res, next){
    try{
      const {name, price, typeId, info} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      if (info) {
        info = JSON.parse(info)
        info.forEach(i => 
          ProductInfo.create({
            title: i.title,
            description: i.description,
            productId: product.id
          })
          )
      }
      const product = await Product.add({name, price, smellId, typeId, img: fileName})

      return res.json(product)
    } catch(e){
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res){
    const {smellId, typeid, limit, page} = req.body
    page = page || 1
    limit = limit || 5
    let offset = page * limit - limit
    let product
    if (!smellId && !typeId) {
      product = await Product.findAndCountAll({limit, offset})
    }
    if (smellId && !typeId) {
      product = await Product.findAndCountAll({were:{smellId, limit, offset}})
    }
    if (!smellId && typeId) {
      product = await Product.findAndCountAll({were:{typeId, limit, offset}})
    }
    if (smellId && typeId) {
      product = await Product.findAndCountAll({were:{smellId, typeId, limit, offset}})
    }
    return res.json(product)
  }
  async getOne(req, res){
    const{id} = req.params
    const prodyct = await Product.findOne(
      {
        where: {id},
        include: [{model: ProductInfo, as: 'info'}]
      }
    )
    return res.json(product)
  }
  async delete(req, res){

  }
}

module.export = ProductController()
