const router = require('express').Router();
const List = require('../models/List');

router.post('/create/373ftnn5123', (req, res) => {
    const date = new Date,
     newList = new List({
        creator : req.body.creator,
        task : req.body.task,
        createdAt : date.toLocaleDateString()
    })
    newList.save();

});

router.get('/list/373ftnn5123', (req, res) => {
    List.find({}, (err, list) => {
        res.send(list)
    });
});

router.get('http://localhost:3500/list/373ftnn5123/:id', (req, res) => {
    console.log(req.params.id);
    res.send('Query Recieved')
})

module.exports = router;