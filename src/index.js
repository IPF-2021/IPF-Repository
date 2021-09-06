const express = require('express')
const app = express()
require('./database')

//middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/users', require('./routes/user.routes'));
app.use('/profesores', require('./routes/prof.routes'));

//configs

app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log("servidor iniciado", app.get('port'))
})