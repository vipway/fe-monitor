'use strict';

import Koa from 'koa';
import middlewares from './middlewares';
import router from './routes';

const app = new Koa();
app.use(middlewares);
app.use(router.routes(), router.allowedMethods());

export default app;
