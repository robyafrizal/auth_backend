class UserHandler {
  constructor(UserService) {
    this.UserService = UserService;

    this.getAll = this.getAll.bind(this);
    this.getId = this.getId.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res) {
    const serviceRes = await this.UserService.getAll();

    res.status(serviceRes.statusCode).send({
      users: serviceRes.users,
    });
  }

  async getId(req, res) {
    try {
      const id = req.params.id;
      const userById = await this.UserService.getId(id);
      res
        .status(userById.statusCode)
        .send({ users: userById.userById, message: userById.message });
    } catch (err) {
      res.status(userById.statusCode).send({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id, name, email, password } = req.body;
      const updateUser = await this.UserService.update({
        id,
        name,
        email,
        password,
      });

      res
        .status(updateUser.statusCode)
        .send({ users: updateUser, message: updateUser.message });
    } catch (err) {
      res.status(updateUser.statusCode).send({ message: err.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const deleteUser = await this.UserService.delete(id);
      res.status(deleteUser.statusCode).send({ message: deleteUser.message });
    } catch (err) {
      res.status(deleteUser.statusCode).send({ message: err.message });
    }
  }
}

module.exports = UserHandler;
