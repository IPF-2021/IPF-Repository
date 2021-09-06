const express = require('express')
const app = express()
require('./database')

//middlewares

app.use(express.json())


//routes
app.use('/profesores', require('./routes/routes.prof'));


//configs

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log("servidor iniciado", app.get('port'))
})