
const express = require("express")
const app = express ()
app.use(express.json())

const ProductManager = require("./ProductManager") 
const productManager = new ProductManager()


app.get("/products", async (req, res) =>{
    const db = await productManager.getProductsHttp()
    res.json({
        db,
        status: "success",
    });
})

app.get("/productos/products/:id", async (req, res) =>{
    let id= req.params.id
    const db = await productManager.getBYId(id)
    res.json({
        db,
        status: "success",
    });
})

app.listen(8080, () => {
    console.log("servidor corriendo puerto 8080")
})