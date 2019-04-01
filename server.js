const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT||3000;

app.set('view engine','hbs');

app.use(express.static(__dirname+'/views'));

app.get('/',(req,res)=>{
	res.render('main.hbs');
}); 

app.listen(port,() => {
	console.log(`server is up and running! port ->${port}`);
});