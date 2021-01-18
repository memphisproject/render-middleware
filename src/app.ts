import express from 'express'
import path from 'path';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join( __dirname, "views" ));
app.set("view engine", "jade" );
app.use('/:user/:name/:id', router);

export { app }
