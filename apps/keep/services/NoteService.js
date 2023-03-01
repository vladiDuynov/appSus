import { storageService } from "../../../services/async-storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const noteService = {
    _createNotes,
    query,
    saveNote,
    deleteNote,
    togglePin,
    updateBgc,
    toggleTodo,
    duplicateNote,
    editNote,
}

const NOTES_KEY = 'notes';


function query() {
    return storageService.query(NOTES_KEY)
}

function editNote(noteId, newNote) {
    return storageService.get(NOTES_KEY, noteId)
        .then(note => {
            note = newNote
            return storageService.put(NOTES_KEY, note)
        })
}

function deleteNote(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}

function duplicateNote(noteId) {
    return storageService.get(NOTES_KEY, noteId)
        .then(note => {
            return storageService.post(NOTES_KEY, note)
        })
}

function updateBgc(noteId, bgc) {
    return storageService.get(NOTES_KEY, noteId)
        .then(note => {
            note.style.backgroundColor = bgc
            return storageService.put(NOTES_KEY, note)
        })
}

function toggleTodo(todoId, noteId) {
    return storageService.get(NOTES_KEY, noteId)
        .then(note => {
            const todo = note.info.todos.find(todo => todo.id === todoId)
            if (!todo.doneAt) todo.doneAt = Date.now()
            else todo.doneAt = null
            return storageService.put(NOTES_KEY, note)
        })
}

function togglePin(noteId) {
    return storageService.get(NOTES_KEY, noteId)
        .then(note => {
            note.isPinned = !note.isPinned
            return storageService.put(NOTES_KEY, note)
        })
}

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    var match = url.match(regExp)
    return (match && match[7].length == 11) ? match[7] : false
}

function saveNote(note) {
    if (note.type === 'note-video') {
        const URL = youtube_parser(note.info.url)
        note = {
            id: utilService.makeId(),
            type: note.type,
            isPinned: false,
            info: {
                url: `https://www.youtube.com/embed/${URL}`,
                title: note.info.title
            },
            style: {
                backgroundColor: utilService.getRandomColor()
            }
        }
    } else if (note.type === 'note-txt') {
        note = {
            id: utilService.makeId(),
            type: "note-txt",
            isPinned: false,
            info: {
                title: note.info.title,
                txt: note.info.txt
            },
            style: {
                backgroundColor: utilService.getRandomColor()
            }
        }
    } else if (note.type === 'note-todos') {
        note = {
            id: utilService.makeId(),
            type: "note-todos",
            isPinned: false,
            info: {
                label: note.info.label,
                todos: note.info.todos
            },
            style: {
                backgroundColor: utilService.getRandomColor()
            }
        }
    } else if (note.type === 'note-img') {
        note = {
            id: utilService.makeId(),
            type: note.type,
            isPinned: false,
            info: {
                url: note.info.url,
                title: note.info.title
            },
            style: {
                backgroundColor: utilService.getRandomColor()
            }
        }
    }
    return query()
        .then(notes => {
            notes.push(note)
            console.log('posting')
            return storageService.post(NOTES_KEY, note)
        })
}

function _createNotes() {
    return query()
        .then(notes => {
            if (!notes || !notes.length) {
                notes = [{
                        id: utilService.makeId(),
                        type: "note-todos",
                        isPinned: true,
                        info: {
                            label: "Finish this sprint",
                            todos: [
                                { id: utilService.makeId(), txt: "Write code", doneAt: 187111111 },
                                { id: utilService.makeId(), txt: "Stare at code untill realizing why it's not working", doneAt: null },
                                { id: utilService.makeId(), txt: "Ask Amir for help and get no for an answer", doneAt: null },
                                { id: utilService.makeId(), txt: "Box shadow everywhere", doneAt: 187111111 }
                            ],
                        },
                        style: {
                            backgroundColor: utilService.getRandomColor()
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: "note-txt",
                        isPinned: true,
                        info: {
                            txt: "pukifrfrfrfrfrfr"
                        },
                        style: {
                            backgroundColor: utilService.getRandomColor()
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: "note-img",
                        isPinned: false,
                        info: {
                            url: "https://i.pinimg.com/originals/4f/b5/88/4fb5886838c0492fc4b0cee3de87b648.jpg",
                            title: "Programmer Life Explained"
                        },
                        style: {
                            backgroundColor: utilService.getRandomColor()
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: "note-video",
                        isPinned: false,
                        info: {
                            url: "https://www.youtube.com/watch?v=5X2MxY1nkqw",
                            title: "Seal"

                        },
                        style: {
                            backgroundColor: utilService.getRandomColor()
                        }
                    },  
                    {
                        id: utilService.makeId(),
                        type: "note-img",
                        isPinned: false,
                        info: {
                            url: "https://i.imgflip.com/7cjv51.jpg",
                            title: "Presentation Meme"
                        },
                        style: {
                            backgroundColor: utilService.getRandomColor()
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: "note-img",
                        isPinned: false,
                        info: {
                            url: "https://i.imgflip.com/770ugh.jpg",
                            title: "Lazy Meme"
                        },
                        style: {
                            backgroundColor: utilService.getRandomColor()
                        }
                    },
                     
                ]
                return storageService.postMany(NOTES_KEY, notes)
            }
            return notes
        })
}