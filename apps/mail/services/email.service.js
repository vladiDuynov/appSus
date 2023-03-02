import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const EMAIL_KEY = 'emailDB'

let gEmails = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'mimi@mimi.com',
        to: 'thisisme@appsus.com'
    },
    {
        id: 'e102',
        subject: 'Hi from New York!',
        body: `Heeeey! We're having so much fun visiting the city! We went to central Park - wowww what a beautiful place! We're going shopping today so I hope I'll find the stuff you asked me to get you ! Love u talk soonnnn`,
        isRead: true,
        sentAt: 1551133960594,
        removedAt: null,
        from: 'labg@gmail.com',
        to: 'thisisme@appsus.com'
    },
    {
        id: 'e103',
        subject: 'About your order!',
        body: 'Your order from Zara is on its way, the delivery service will be in touch with you. ',
        isRead: false,
        sentAt: 1551133970594,
        removedAt: null,
        from: 'donotreply@zarashop.com',
        to: 'thisisme@appsus.com'
    },
    {
        id: 'e104',
        subject: 'Second round',
        body: `let's see who wins the battle...` ,
        isRead: false,
        sentAt: 1551132970594,
        removedAt: 1551132990594,
        from: 'uklash@newsletter.com',
        to: 'thisisme@appsus.com'
    },
    {
        id: 'e105',
        subject: 'Your Apple Receipt',
        body: 'Hi you, here is your receipt for your monthly subscription ',
        isRead: false,
        sentAt: 1551133970594,
        removedAt: null,
        from: 'apple@donotreply.com',
        to: 'thisisme@appsus.com'
    },
    {
        id: 'e106',
        subject: 'Invite Update',
        body: 'Adam has updated the invitation : Sprint 3 - Delivery 2 - thur. march 2nd at 9pm - Coding Academy',
        isRead: false,
        sentAt: 1551133870594,
        removedAt: null,
        from: 'adamB@misterbit.com',
        to: 'thisisme@appsus.com'
    },
    {
        id: 'e107',
        subject: 'Security Alert',
        body: 'New Connexion from an Apple iPhone thisisme@gmail.com We recommend you confirm your identity to keep your account secure',
        isRead: true,
        sentAt: 1551133860594,
        removedAt: null,
        from: 'google@donotreply.com',
        to: 'thisisme@appsus.com'
    },
    {
        id: 'e108',
        subject: 'Free Grammar Checker',
        body: 'Correct all grammar errors and enhance your writing at once while using Grammarly in your text editor or browser',
        isRead: false,
        sentAt: 1551133870594,
        removedAt: null,
        from: 'grammarly@ad.com',
        to: 'thisisme@appsus.com'
    },
    {
        id: 'e109',
        subject: 'Oh baby! Get inspired for your new arrival... ',
        body: `Invites and announcements to celebrate your cutie! No matter what you have planned, baby's first party will be one to remember!`,
        isRead: false,
        sentAt: 1551134070594,
        removedAt: null,
        from: 'Greetings-Island@newsletter.com',
        to: 'thisisme@appsus.com'
    },
    {
        id: 'e110',
        subject: '10% off EVERYTHING!',
        body: `Oh, and there's an extra 20% off dresses, too...Just cos we felt like it ! We're dropping MAJOR deals over the next few days.`,
        isRead: false,
        sentAt: 1551133970594,
        removedAt: null,
        from: 'ASOS@dispatch.com',
        to: 'thisisme@appsus.com'
    },
]

_createEmails()

export const emailService = {
    query,
    get,
    remove,
    save,
    getEmptyEmail,
}

function query(filterBy = {}) {
    return storageService.query(EMAIL_KEY)
        .then(emails => {
            // if (filterBy.txt) {
            //     const regex = new RegExp(filterBy.txt, 'i')
            //     emails = emails.filter(email => regex.test(email.title))
            // }
            // if (filterBy.price) {
            //     emails = emails.filter(email => email.price >= filterBy.price)
            // }
            return emails
        })
}

function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
        .then(_setNextPrevEmailId)

}

function _setNextPrevEmailId(email) {
    return storageService.query(EMAIL_KEY).then(emails => {
        const idx = emails.findIndex(curremail => curremail.id === email.id)
        email.nextEmailId = emails[idx + 1] ? emails[idx + 1].id : emails[0].id
        email.prevEmailId = emails[idx - 1] ? emails[idx - 1].id : emails[emails.length - 1].id
        return email
    })
}

function remove(emailId) {
    return storageService.remove(EMAIL_KEY, emailId)
}

function save(email) {
    if (email.id) {
        return storageService.put(EMAIL_KEY, email) // update/edit entity
    } else {
        return storageService.post(EMAIL_KEY, email) // create new and add entity to DB
    }
}

function getEmptyEmail() {
    return {
        id: null,
        subject: null,
        body: null,
        isRead: null,
        sentAt: null,
        removedAt: null,
        from: null,
        to: null
    }
}

function _createEmails() {
    let emails = loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {
        emails = gEmails
        saveToStorage(EMAIL_KEY, emails)
    }
}

function _createEmail(title, price = 50) {
    const email = getEmptyEmail(title, listPrice.amount)
    email.id = utilService.makeId()
    return email
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null)
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}