const userService = require('../services/user.service');
const { createUserSchema } = require('../validations/user.schema');

exports.createUser = async (req, res, next) => {
  try {
    const data = createUserSchema.parse(req.body);
    const user = await userService.createUser(data);
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    res.json({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};
