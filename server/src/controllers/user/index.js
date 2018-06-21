import joi from 'joi';

// 注册参数校验
const userSchemaSignup = joi.object({});

class User {
  constructor() {}

  // 注册
  async signup(ctx) {
    ctx.body = { success: true };
  }

  // 登录
  async login(ctx) {
    // const request = ctx.request.body;
    ctx.body = { success: true };
  }

  // 获取用户
  async getUser(ctx) {
    ctx.body = {
      success: true,
      data: {
        username: 'admin',
        mobile: '17621618886'
      }
    };
  }
}

export default User;
