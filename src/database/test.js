const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {

    proffyValue = {
        name: 'Kleber Alves',
        avatar: 'https://avatars1.githubusercontent.com/u/58371208?v=4',
        whatsapp: '8190000000',
        bio: 'QA / Front End Developer'
    }

    classValue = {
        subject: 1,
        cost: "20",
    }

    classScheduleValues = [
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

   await createProffy(db, { proffyValue, classValue, classScheduleValues })

   // Consultar os dados inseridos
   const selectedProffy = await db.all("SELECT * FROM proffys")
  
   // Consultar as classes de um determinado professor e trazer junto os dados do professor
   const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // 
    const selectClasseSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.table(selectClasseSchedules)
})