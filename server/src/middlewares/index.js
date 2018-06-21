import compose from 'koa-compose';
import bodyParser from 'koa-bodyparser';
import cors from './cors';

export default compose([bodyParser(), cors]);
