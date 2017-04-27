
let nextNoteId = 0

export const addNote = (title, description) => {
    return {
        type: 'ADD_TODO',
        id: nextNoteId++,
        title,
        description
    }
}

