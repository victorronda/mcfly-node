import {
	createNewNote,
	showAllNotes,
	noteDetails,
	favoriteNote,
	showAllFavorites,
	Note
} from '../../controllers/index';
import "regenerator-runtime/runtime.js";

describe('Checking the routes', () => {


    it('Can I create a new note', async (done) => {
		const newNote={phrase: 'Test1'}
        const note = await createNewNote(newNote);
		expect(note).toHaveProperty('phrase');
		expect(note).toHaveProperty('favorite');

    })

})


