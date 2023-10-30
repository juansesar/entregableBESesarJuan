const {Router} = require("express")
const express = require("express")
const router = Router()
router.use(express.json())
router.use(express.urlencoded({extended : true}))

const Cart = require("../src/CartManager") 
const cart = new Cart()

router.get("/cart/products", async (req, res) =>{
    const db = await cart.getCartProducts()
    res.status(200).json({
        db,
        status: "success",
    });
})

router.get("/cart/products/:id", async (req, res) =>{
    let id= req.params.id
    const db = cart.getCartById(id)
    res.status(200).json({
        db,
        status: "success",
    });
})



router.post("/cart/products/:id", async (req, res) =>{
    const {body, params} = req
    const id = params.id
    const newProduct = addToCart(id,
        ...body
        )
    res.status(201).json(newProduct)
})


router.delete("/cart/products/:id", async (req, res) =>{
    const { params} = req
    const ProductId = params.id
    const producDel = deleteById(
        ProductId
    )
    res.status(201).json(producDel)
})



module.exports= router