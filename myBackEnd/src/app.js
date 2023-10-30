
const express = require("express")
const app = express ()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

const productsRouter = require("../routers/productsRouter.js")
const cartRouter = require("../routers/cartRouter.js")

app.use("/", productsRouter, cartRouter )

app.listen(8080, () => {
    console.log("servidor corriendo puerto 8080")
})