const express = require('express');
const app = express();

app.get('/',(req,res) => {
	res.send('Server running');
})

//Greetings
app.get('/greeting/',(req,res) => {
	res.send('Hello stranger');
})

app.get('/greeting/:name',(req,res) => {
	res.send('Hello'+req.params.name);
})









app.listen(3000);