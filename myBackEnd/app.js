
const express = require("express")
const app = express ()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

const ProductManager = require("./ProductManager") 
const productManager = new ProductManager()


app.get("/products", async (req, res) =>{
    const db = await productManager.getProductsHttp()
    res.status(200).json({
        db,
        status: "success",
    });
})

app.get("/productos/products/:id", async (req, res) =>{
    let id= req.params.id
    const db = productManager.getBYId(id)
    res.status(200).json({
        db,
        status: "success",
    });
})

app.post("/products", async (req, res) =>{
    const {body} = req
    const newProduct = addProduct(
        ...body
    )
    res.status(201).json(newProduct)
})

app.put("/products/mod:id", async (req, res) =>{
    const {body, params} = req
    const ProductId = params.id
    const productMod = updateById(
        ProductId,
        ...body
    )
    res.status(201).json(productMod)
})

app.delete("/products/mod:id", async (req, res) =>{
    const { params} = req
    const ProductId = params.id
    const producDel = deleteById(
        ProductId,
    )
    res.status(201).json(producDel)
})

app.listen(8080, () => {
    console.log("servidor corriendo puerto 8080")
})