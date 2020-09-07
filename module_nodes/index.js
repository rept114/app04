import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = 5000;

app.use(bodyParser.json());

//Metodo GET o Obtener
app.get('/', (request, response) =>{
    response.send('<h1>Hello my custom server</h1>');
});

app.listen(port, ()=> console.log(`Server started at: http://localhost:${port}`));