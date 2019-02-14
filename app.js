const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path')

const app = express();

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res) =>{
   
    res.status(404).sendFile(path.join(rootDir,  'views', '404.html'))
});






