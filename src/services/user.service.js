const users = [];

exports.createUser = async (data) => {
  const user = { id: Date.now(), ...data };
  users.push(user);
  return user;
};

exports.getUsers = async () => {
  return users;
};
