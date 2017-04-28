
let nextNoteId = 0;

const note = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            nextNoteId++;
            action.note.id = nextNoteId;
            return action.note;
        default:
            return state
    }
}

const def = [ { id: 1, title: 'eins', description: 'description ...' }];

const notes = (state = def, action) => {
    if (nextNoteId == 0) {
        state.forEach(function(n) {
            if (n.id > nextNoteId) {
                nextNoteId = n.id;
            }
        });
    }
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                note(undefined, action), ...state
            ];
        default:
            return state
    }
}

export default notes