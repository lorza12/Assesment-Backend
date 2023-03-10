import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

import connectDb from './configdb/database';
import routes from './routes';
import configExpress from './configdb/express';


const app = express();

const port = process.env.PORT || 8080;

configExpress(app);

connectDb();

routes(app);




app.listen(port, () => {
    console.log('server is running on port 8080');
});