class ProductManager {

    static id = 0;
    static code = 0;
    
    
    constructor (stock){
        this.products=[];
        this.stock = stock
        
    }

    addProduct (title, description, price, thumbnail, stock) {
        const product = { 
        title,
        description ,
        price ,
        thumbnail ,
        code : ProductManager.code += 1123 ,
        stock ,
        id : ProductManager.id += 1 ,} 
        
        this.products.push(product)
        return product
    }

    
    

    getProducts() {
        return console.log(this.products)
    }

    getBYId(id){
        const producto = this.products.find((p) =>p.id === id)
        if (!producto){
            console.log("este producto no existe")
        }else{
            console.log("el producto es", producto.title)
        }

    }

}

const productManager = new ProductManager()

const newProduct = productManager.addProduct("huevos", "huevo colorado", 500, "./img", 400)
const newProduct2 = productManager.addProduct("pollo", "pollo de campo", 1000, "./img2", 40)

const id = 1

productManager.getBYId(id)

console.log(productManager.getProducts())
