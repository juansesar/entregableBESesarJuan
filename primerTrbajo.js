// const fs = require("fs");

class ProductManager {

    static id = 0;
    static code = 0;
    static path = "./package.json"

    constructor(stock) {
        this.products = [];
        this.stock = stock

    }


    async addProduct(title, description, price, thumbnail, stock) {

        const product = {
            title,
            description,
            price,
            thumbnail,
            code: ProductManager.code += 1123,
            stock,
            id: ProductManager.id += 1,
        }

        this.products.push(product)
        const path = "./package.json"
        let db = product
        const fs = require("fs");
        const dbJson = JSON.stringify(db, "./package.json", "/t")
        try {
            await fs.promises.writeFileSync("./package.json", dbJson, "utf-8")
            console.log("se escribio en archivo correctametne")
            return product
        } catch (error) {
            console.log(`hay un error en la escritura: ${error.menssage}`)
        }
    }




    async getProducts() {
        const fs = require("fs");
        const path = "./package.json"
        try {

            const db = await fs.promises.readFile(path, "utf-8")
            const dbj = JSON.parse(db)
            return console.log(dbj)
        } catch (error) {
            console.log(`hay un error en la lectura: ${error.menssage}`)
        }
    }

    async getBYId(id) {
        const fs = require("fs");
        const path = "./package.json"
        const db = await fs.promises.readFile(path, "utf-8")
        const dbj = JSON.parse(db)
        const producto = dbj.find((p) => p.id === id)
        if (!producto) {
            console.log("este producto no existe")
        } else {
            console.log("el producto es", producto.title)
        }

    }

    async updateById(id, title, description, price, thumbnail, stock) {
        const fs = require("fs");
        const path = "./package.json"
        const db = await fs.promises.readFile(path, "utf-8")
        const dbj = JSON.parse(db)
        const producto = dbj.find((p) => p.id === id)
        if (!producto) {
            console.log("este producto no existe")
        } else {
            producto.title = title
            producto.description = description
            producto.price = price
            producto.thumbnail = thumbnail
            producto.stock = stock
            const dbJson = JSON.stringify(dbj, path, "/t")
            try {
                await fs.promises.writeFileSync(path, dbJson, "utf-8")
                console.log("se reescribio en archivo correctametne")
                return product
            } catch (error) {
                console.log(`hay un error en la reescritura: ${error.menssage}`)
            }
        }

    }

    async deleteById(id) {
        const fs = require("fs");
        const path = "./package.json"
        const db = await fs.promises.readFile("./package.json", "utf-8")
        const dbj = JSON.parse(db)
        const producto = dbj.find((p) => p.id === id)
        if (!producto) {
            console.log("este producto no existe")
        } else {
            delete dbj[producto]
            console.log(`el producto ${producto.title} se ha eliminado, la lita de productos ahora es:`, dbj)
            const dbJson = JSON.stringify(dbj, path, "/t")
            try {
                await fs.promises.writeFileSync(path, dbJson, "utf-8")
                console.log("se reescribio en archivo correctametne")
                return product
            } catch (error) {
                console.log(`hay un error en la reescritura: ${error.menssage}`)
            }
        }

    }

}

const productManager = new ProductManager()

const newProduct = productManager.addProduct("huevos", "huevo colorado", 500, "./img", 400)

const newProduct2 = productManager.addProduct("pollo", "pollo de campo", 1000, "./img2", 40)

const id = 1

productManager.getBYId(id)

console.log(productManager.getProducts())

productManager.updateById(1, "huevos grandes", "colorados", 700, "./img", 400)

console.log(productManager.getProducts())

productManager.deleteById(1)