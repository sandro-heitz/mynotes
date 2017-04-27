
const note = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                id: action.id,
                title: action.title,
                description: action.description
            }

        default:
            return state
    }
}

const notes = (state = [ { id: 1, title: 'eins', description: 'description ...' }], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                note(undefined, action)
            ]

        default:
            return state
    }
}

export default notes