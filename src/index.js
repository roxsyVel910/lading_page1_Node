 
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';


const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));


app.set('views', join(__dirname, 'views'));


app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'))

app.listen(8000, () => {
  console.log('Servidor corriendo en el puerto 8000');
})
