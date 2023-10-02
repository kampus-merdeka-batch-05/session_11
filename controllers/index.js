const db = require("../config")

class Todos {
  static async getTodos(req, res) {
    try {
      const result = await db.query(`select * from todos`)

      res.render("home", { data: result.rows})
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static async addTodos(req, res) {
    try {
      const {
        title
      } = req.body

      await db.query(`insert into todos (title, checked) values ($1, $2)`, [title, false])

      // res.status(200)
      res.redirect("/")
    } catch (error) {
      res.status(500).json(error)
      
    }
  }

  static async deleteTodos(req, res) {
    try {

      const { todoId } = req.params

      await db.query(`delete from todos where id = $1`, [todoId])

      res.end()

    } catch (error) {
      res.status(500).json(error)
      
    }
  }

  static async updateTodos(req, res) {
    try {
      const { todoId } = req.params
  
      // select existing data
      const currentData = await db.query(`select * from todos where id = $1`, [todoId])
  
      // update data
      await db.query(`update todos set checked = $1 where id = $2`, [!currentData.rows[0]?.checked, todoId])
  
      res.end()
      
    } catch (error) {
      res.status(500).json(error)
      
    }
  }
}

module.exports = Todos