const { Router } = require('express');
const router = Router();

const indexControllers = require('../controllers/index')

router.post('/create', indexControllers.createNewNote);
router.get('/show/all', indexControllers.showAllNotes);
router.get('/show/:id', indexControllers.noteDetails);
router.post('/fav/:id', indexControllers.favoriteNote);
router.get('/fav/all', indexControllers.showAllFavorites);

module.exports = router;
