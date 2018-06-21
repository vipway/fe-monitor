'use strict';

import Router from 'koa-router';
import User from '../../controllers/user';

const router = new Router();
const user = new User();

router.get('/login', async (ctx, next) => {
  await user.getUser(ctx);
});

router.post('/login', async (ctx, next) => {
  await user.login(ctx);
});

router.post('/signup', async (ctx, next) => {
  await user.signup(ctx);
});

export default router;
