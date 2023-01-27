import { Application } from 'express';

import authLocal from './auth/local';
import user from './api/user';


function routes(app: Application): void {
  app.use('/api/users', user);
  app.use('/auth/local', authLocal);
//   app.use('/auth/local', authLocal);
 



}

export default routes;