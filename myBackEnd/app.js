
const express = require("express")
const app = express ()
app.use(express.json())

const ProductManager = require("./ProductManager") 
const productManager = new ProductManager
console.log(ProductManager)

app.get("/products", async (req, res) =>{
    const db = productManager.getProductsHttp()
    res.json({
        db,
        status: "success",
    });
})

app.get("/productos/products:id", async (req, res) =>{
    const db = await productManager.getBYId(req.params.id)
    res.json({
        db,
        status: "success",
    });
})

app.listen(8080, () => {
    console.log("servidor corriendo puerto 8080")
})