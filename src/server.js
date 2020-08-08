require('express')()
.get('/', (req, res) => {
    console.log('Servidor rodando')
    return res.send('OK')
})
.get('/study', (req, res) => {
    return res.send('/study')
})
.listen(5000)