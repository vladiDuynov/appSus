'use strict'

export const googleBooksService = {
    query,
}

const KEY = 'googlebooksDB'

function query(keyword) {
    const keywordGBMap = loadFromStorage(KEY) || {}
    if (keywordGBMap[keyword]) return Promise.resolve(keywordGBMap[keyword])

    console.log('Getting from Network')

    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
        .then(res => {
            var books = res.data.items.map(book => book.volumeInfo)
            keywordGBMap[keyword] = books
            saveToStorage(KEY, keywordGBMap)
            return books
        })
}


function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    const json = localStorage.getItem(key)
    return JSON.parse(json)
}