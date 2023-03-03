function on(eventName, listener) {
    const callListener = ({ detail }) => {
        listener(detail);
    }
    window.addEventListener(eventName, callListener)
    return () => {
        window.removeEventListener(eventName, callListener)
    }
}

function emit(eventName, data) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }))
}

export const eventBusService = { on, emit }


// setTimeout(() => {
//     eventBusService.emit('show-msg', { txt: 'Happy', type: 'success' })
// }, 5000);