module.exports = (app) => {
    app.use('/admin', require('../routes/index'))
}