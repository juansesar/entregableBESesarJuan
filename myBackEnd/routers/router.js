const {Router} = require("express")
const express = require("express")
const router = Router()
router.use(express.json())
router.use(express.urlencoded({extended : true}))

const ProductManager = require("../src/ProductManager") 
const productManager = new ProductManager()


router.get("/products", async (req, res) =>{
    const db = await productManager.getProductsHttp()
    res.status(200).json({
        db,
        status: "success",
    });
})

router.get("/productos/products/:id", async (req, res) =>{
    let id= req.params.id
    const db = productManager.getBYId(id)
    res.status(200).json({
        db,
        status: "success",
    });
})



router.post("/products", async (req, res) =>{
    const {body} = req
    const newProduct = addProduct(
        ...body
    )
    res.status(201).json(newProduct)
})

router.put("/products", async (req, res) =>{
    const {body, params} = req
    const ProductId = params.id
    const productMod = updateById(
        ProductId,
        ...body
    )
    res.status(201).json(productMod)
})

router.delete("/products", async (req, res) =>{
    const { params} = req
    const ProductId = params.id
    const producDel = deleteById(
        ProductId
    )
    res.status(201).json(producDel)
})



module.exports= router