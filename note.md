# `ctx.throw()` 用来抛出错误
# ctx.response.status = 404; 设置回应状态码

# error 事件的监听

```
app.on('error', (err, ctx) =>
  console.error('server error', err);
);

```
# ctx.cookies用来读写 Cookie