const express = require('express');
const app = express();

app.get('/',(req,res) => {
	res.send('Server running');
})

//Greetings
app.get('/greeting/',(req,res) => {
	res.send('Hello stranger.');
})

app.get('/greeting/:name',(req,res) => {
	res.send('Hello '+req.params.name);
})

//Tip Calculator
app.get('/tip/:total/:tipPercentage',(req,res) => {
	console.log(req.params);
	let total = req.params.total;
	let tipPercentage = req.params.tipPercentage;

	let tipAmount = (total*tipPercentage/100).toString();

	res.send(tipAmount);
})






app.listen(3000);