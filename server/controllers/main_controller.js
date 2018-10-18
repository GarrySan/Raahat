const Models=require('../mongoose/Models.js');
const Victim = Models.Victim;
const Helper = Models.Helper;
const Rescue = Models.Rescuer;

//create a distress signal
exports.createDistress = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Signal cannot be empty"
        });
    }
    const rSignal = req.body;
    Victim.create(rSignal)
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the signal."
            });

        });
}

//get Distress Signals
exports.getDistress = (req, res) => {
    Victim.find()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while getting the signals."
            });

        });
}

//create a distress signal
exports.createHelper = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Signal cannot be empty"
        });
    }
    const rSignal = req.body;
    Helper.create(rSignal)
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the helper."
            });

        });
}

//get helpers Signals
exports.getHelpers = (req, res) => {
    Helper.find()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while getting the helpers."
            });

        });
}

//get rescues Signals
exports.getRescuers = (req, res) => {
    Rescue.find()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while getting the rescuers."
            });

        });
}