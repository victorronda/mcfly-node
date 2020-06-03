const { Router } = require('express');
const router = Router();

router.post('/create', (req,res) => {
    
    res.json(data);
})


router.get('/show/all', (req,res) => {

    res.json(data);
})


router.get('/show/:id', (req,res) => {

    res.json(data);
})


router.post('/fav/:id', (req,res) => {

    res.json(data);
})


router.get('/fav/all', (req,res) => {

    res.json(data);
})


module.exports = router;