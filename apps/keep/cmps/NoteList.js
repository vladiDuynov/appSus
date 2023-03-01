import notePreview from "./NotePreview.js"

export default {
    props: ["pinnedNotes", "unPinnedNotes"],
    template: `
        <section class="notes">
            <section class="note-list pinned-notes" v-if="pinnedNotes">
                <h4 class="pinned-headline">Pinned</h4>
                <note-preview v-for="note in pinnedNotes" :key="note.id" :note="note" @note-pinned="togglePin" @note-deleted="deleteNote" @note-bgc-updated="updateBgc" @todo-done="toggleTodo" @note-duplicate="duplicateNote" @editor-opened="openScreen" @note-edited="editNote" />
            </section>
            <section class="note-list un-pinned-notes" v-if="unPinnedNotes">
                <h4 class="pinned-headline">Other</h4>
                <NotePreview v-for="note in unPinnedNotes" :key="note.id" :note="note" @note-pinned="togglePin" @note-deleted="deleteNote" @note-bgc-updated="updateBgc" @todo-done="toggleTodo" @note-duplicate="duplicateNote" @editor-opened="openScreen" @note-edited="editNote" />
            </section>
        </section>
    `,
    components: {
        notePreview
    },
    created() {},
    data() {
        return {}
    },
    methods: {
        deleteNote(noteId) {
            this.$emit('note-deleted', noteId)
        },
        togglePin(noteId) {
            this.$emit('note-pinned', noteId)
        },
        updateBgc(noteId, bgc) {
            this.$emit('note-bgc-updated', noteId, bgc)
        },
        toggleTodo(todoId, noteId) {
            this.$emit('todo-done', todoId, noteId)
        },
        duplicateNote(noteId) {
            this.$emit('note-duplicate', noteId)
        },
        editNote(noteId, newNote) {
            this.$emit('note-edited', noteId, newNote)
        },
        openScreen() {
            this.$emit('editor-opened')
        }
    },
    computed: {},
    mounted() {},
    unmounted() {},
}