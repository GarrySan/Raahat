module.exports = (app) => {
    const main = require('../controllers/main_controller.js');

    //create a new distress signal
    app.post('/createDistress', main.createDistress);

    // //get all the current distress signals
    // app.get('/getDistress', main.getDistress);

    // //get all the helpers/shelters
    // app.get('/getHelpers', main.getHelpers);

    // //create a new helper
    // app.post('/createHelper', main.createHelper);

    // //get all the rescuers
    // app.get('/getRescuers', main.getRescuers);
}