const {Router} = require("express")
const express = require("express")
const router = Router()
router.use(express.json())
router.use(express.urlencoded({extended : true}))

const ProductManager = require("../src/ProductManager") 
const productManager = new ProductManager()