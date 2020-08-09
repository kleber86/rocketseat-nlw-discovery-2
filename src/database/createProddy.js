mnodule.exports = function (db, { proffyValue, classValue, classSchedule }) {
    
    const insertProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            ${proffyValue.name},
            ${proffyValue.avatar},
            ${proffyValue.whatsapp},
            ${proffyValue.bio},
        );
    `)

    const proffy_id = insertProffy.lastID
}