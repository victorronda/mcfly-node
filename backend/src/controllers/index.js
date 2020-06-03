const Note = require('../models/Note');


const createNewNote = async (req, res) => {
	const { phrase } = req.body;
	try {
		const newNote = await Note.create({ phrase });
		res.status(201).json(newNote);
	} catch (error) {
		console.log('Error:', error);
	}
}


const showAllNotes =  async (req, res) => {
	try {
		const allNotes = await Note.find();
		res.status(200).json(allNotes);
	} catch (error) {
		console.log('Error:', error);
	}
}


const noteDetails = async (req, res) => {
	try {
		const theNote = await Note.find(req.params.id);
		res.status(200).json(theNote);
	} catch (error) {
		console.log('Error:', error);
	}
}


const favoriteNote = async (req, res) => {
	try {
		const isFavourite = await Note.findByIdAndUpdate(req.params.id, {$set: {favorite: true}}, {new: true});
		res.status(200).json(isFavourite);
	} catch (error) {
		console.log('Error:', error);
	}
}


const showAllFavorites = async (req, res) => {
	try {
		const allFavoritesNotes = await Note.find({favorite: true});
		res.status(200).json(allFavoritesNotes);
	} catch (error) {
		console.log('Error:', error);
	}
}

module.exports = {
    createNewNote,
    showAllNotes,
    noteDetails,
    favoriteNote,
    showAllFavorites
}