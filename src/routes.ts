import { Application } from 'express';

import authLocal from './auth/local';
import user from './api/user';
import auth from './api/lists';


function routes(app: Application): void {
  app.use('/api/users', user);
  app.use('/auth/local', authLocal);
  app.use('/api/lists', auth);

}

export default routes;