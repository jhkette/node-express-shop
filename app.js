const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path')

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res) =>{
   
    res.status(404).render('404', {docTitle: 'Page not found', pageTitle: 'Page not found' })
});






