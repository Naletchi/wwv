const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketProduct = sequelize.define('basket_product', {
  id: {type: DataTypes.INTEGER , primaryKey: true, autoIncrement: true}
})

const Product = sequelize.define('product', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: true},
  price: {type: DataTypes.INTEGER, allowNull: true},
  rating: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.STRING, allowNull: true}
})

const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: true}
})

const Color = sequelize.define('color', { 
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: true}
})


const Rating = sequelize.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.INTEGER, allowNull: true}
})

const ProductInfo = sequelize.define('product_info', {
  id: {type: DataTypes.INTEGER , primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: true},
  description: {type: DataTypes.STRING, allowNull: true}
})

const ProductType = sequelize.define('product_type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Type.hasMany(Product)
Product.belongsTo(Type)

Product.hasMany(Color)
Color.belongsTo(Product)

Product.hasMany(Rating)
Rating.belongsTo(Product)

Product.hasMany(ProductInfo)
ProductInfo.belongsTo(Product)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Type.belongsToMany(Color, {through: ProductType })
Color.belongsToMany(Type, {through: ProductType })

module.exports = {
  User,
  Basket,
  BasketProduct,
  Product,
  Type,
  Color,
  Rating,
  ProductType,
  ProductInfo
}

