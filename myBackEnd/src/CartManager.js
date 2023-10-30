const fs = require("fs");

class Cart {

    static id = 0;
    static code = 0;
    static Cartpath = "./cart.json"
    static Productspath = "./products.json"

    constructor(stock) {
        this.products = [];
        this.stock = stock

    }


    

    async addToCart(id) {
        const db = await fs.promises.readFile(Cart.Productspath, "utf-8")
        const dbj = JSON.parse(db)
        let producto = dbj.find((p) => p.id === id)
        if (!producto) {
            console.log("este producto no existe")
            console.log(producto)
        } else {
            this.products.push(producto)
            let db = this.products
            const dbJson = JSON.stringify(db, Cart.cartpath, "\t")
        
            try {
                fs.writeFileSync(Cart.cartpath, dbJson, "utf-8")
                console.log("se agrego el producto a cart")
                return producto
            } catch (error) {
                console.log(`hay un error en la carga: ${error.menssage}`)
            }
        }
            
        }
    
    async getCartProducts() {
        try {
            const db =  await fs.promises.readFile( Cart.cartpath, "utf-8")
            const dbj = JSON.parse(db)
            return dbj
        } catch (error) {
            console.log(`hay un error en la lectura: ${error.menssage}`)
        }
    }

    async getCartById(id) {
        const db = await fs.promises.readFile(Cart.cartpath, "utf-8")
        const dbj = JSON.parse(db)
        let producto = dbj.find((p) => p.id === id)
        if (!producto) {
            console.log("este producto no existe")
            console.log(producto)
        } else {
           return producto
        }

    }

    async updateById(id, title, description, price, thumbnail, stock) {
        const db = await fs.promises.readFile(Cart.cartpath, "utf-8")
        const dbj = JSON.parse(db)
        let producto = Array.from(dbj).find((p) => p.id === id)
        
        if (!producto) {
            console.log("este producto no existe")
        } else {
            
            producto.title = title
            producto.description = description
            producto.price = price
            producto.thumbnail = thumbnail
            producto.stock = stock
            console.log(producto.title)
            try {
                const dbJson = JSON.stringify(dbj, Cart.cartpath, "\t")
                fs.writeFileSync(Cart.cartpath, dbJson, "utf-8")
                return dbJson
                
            } catch (error) {
                console.log(`hay un error en la reescritura: ${error.menssage}`)
            }
        }

    }

    async deleteById(id) {
        const fs = require("fs");
        const db = await fs.promises.readFile(Cart.cartpath, "utf-8")
        const dbj = JSON.parse(db)
        const producto = dbj.find((p) => p.id === id)
        if (!producto) {
            console.log("este producto no existe")
        } else {
            const idDbj = producto.id - 1
            delete dbj[idDbj]
            console.log(`el producto ${producto.title} se ha eliminado, la lita de productos ahora es:`, dbj)
            const dbJson = JSON.stringify(dbj,cartpath, "/t")
            try {
                await fs.promises.writeFileSync(Cart.cartpath, dbJson, "utf-8")
                console.log("se reescribio en archivo correctametne")
                return producto
            } catch (error) {
                console.log(`hay un error en la reescritura: ${error.menssage}`)
            }
        }

    }

}

module.exports= Cart

