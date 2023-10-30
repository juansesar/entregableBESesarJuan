
const express = require("express")
const app = express ()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

const Router = require("../routers/router.js")


app.use("/", Router )

app.listen(8080, () => {
    console.log("servidor corriendo puerto 8080")
})