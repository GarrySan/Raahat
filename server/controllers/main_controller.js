const Victim=require('../mongoose/Models.js');

//create a distress signal
exports.createDistress = (req, res) => {
    console.log(req.body)
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