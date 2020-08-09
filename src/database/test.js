const Database = require('./db')
const createProffy = require('./createProddy')


Database.then((db) => {
    proffyValue = {
        name: 'Kleber Alves',
        avatar: 'https://avatars1.githubusercontent.com/u/58371208?v=4',
        whatsapp: '8190000000',
        bio: 'QA / Front End Developer'
    }

    classValue = {
        subject: "Química",
        cost: "20",
    }

    classSchedule = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        },
    ]

    createProffy(db, { proffyValue, classValue, classSchedule })
})