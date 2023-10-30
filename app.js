const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 4000

const todosRouter = require("./routes/todos")


app.set("view engine", "ejs")

app.use("/static", express.static(__dirname + "/public"))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/", todosRouter)

console.log("Test");

app.listen(PORT, () => {
  console.log("App running on port: ", PORT);
})