const db = require('../db_config')
class UserController {
  async createUser(req, res) {
    const { name, surname } = req.body
    console.log(name, surname)
    // requst to db async, use await
    const newUser = await db.query(
      `INSERT INTO person (name, surname) values ($1, $2) RETURNING *`,
      [name, surname]
    )
    res.json(newUser.rows[0])
  }
  async getUsers(req, res) {}
  async getOneUser(req, res) {}
  async updateUser(req, res) {}
  async deleteUser(req, res) {}
}

module.exports = new UserController()
