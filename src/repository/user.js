const { User } = require("../../models");

class UserRepository {
  constructor() {}

  async findAll() {
    const userList = await User.findAll();

    return userList;
  }

  async findId(id) {
    const idUser = await User.findOne({ where: { id: id } });
    return idUser;
  }

  // async findEmail(user) {
  //   const emailUser = await User.findOne({ where: { email: user.email } });
  //   return emailUser;
  // }

  async getByEmail(email) {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async create(user) {
    const createdUser = await User.create({
      name: user.name,
      email: user.email,
      password: user.password,
      profile_picture: user.profile_picture,
    });
    return createdUser;
  }

  async update(user) {
    const updateUser = await User.update(
      {
        name: user.name,
        email: user.email,
        password: user.password,
        profile_picture: user.profile_picture,
      },
      { where: { id: user.id } }
    );
    return updateUser;
  }

  async delete(id) {
    const deleteUser = await User.destroy({
      where: { id: id },
    });
    return deleteUser;
  }
}

module.exports = UserRepository;
