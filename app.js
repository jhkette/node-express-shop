const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path');
const errorController = require('./controllers/error')

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);






