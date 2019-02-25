const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cartitem')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// middleware only runs if a request is made
app.use((req, res, next)=>{
    User.findById(1)
    .then(user =>{
        req.user = user;
        next();
    })
    .catch(err=> console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
// one to many relationship
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});

// npm starts run this.
// sequelize rewrites database (use fore: true to rewrite)
sequelize.sync({force: true})

.then(result =>{
   return User.findByPk(1); 
})
.then(user =>{
    if(!user){
        return User.create({name: 'Joe', email: 'test@gmail.com'})
    }
    /* should always return a promise if the if statement is a promise 
    . this allows you to use then afterwod. Promise resolve - just creates  a promise then resolves it
    */
    return Promise.resolve(user);
})
.then(user =>{
   
})
.catch(err => {
    console.log(err);
})

app.listen(3000);