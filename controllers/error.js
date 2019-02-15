exports.get404 = (req, res, next) => {
    res.status(404).render('404', { 
        pageTitle: '404',
        path: '',
        formsCSS: false,
        productCSS: false,
        activeAddProduct: false
    });
};