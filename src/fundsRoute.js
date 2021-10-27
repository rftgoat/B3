const fundsController = require('./fundsController');
module.exports = (app) => {
   app.get('/funds/:id', fundsController.getById);
}