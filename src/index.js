const express = require('express')
const path = require('path');
const app = express()
require('./database/connection');
// Setting
app.set(express.static(path.join(__dirname, '/public')));
app.set('port', process.env.PORT || 3000 );


app.use(express.urlencoded({extended: true }));
app.use(express.json());


app.use('/users',require('./routes/users'))

app.use('/tareas',require('./routes/tareas'))




app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
});