const express = require("express")
const router = express.Router()
const TodosController = require("../controllers")

router.get("/", TodosController.getTodos)

router.post("/todo", TodosController.addTodos)

router.delete("/todos/:todoId", TodosController.deleteTodos)

router.put("/todos/:todoId", TodosController.updateTodos)

module.exports = router