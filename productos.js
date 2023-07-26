class ProductManager{
    constructor(){
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(product){
        const {title, description, price, thumbnail, code, stock} =product;

        if (!title || !description || !price || !thumbnail || !code || !stock){
            throw new Error ("¡Completa todos los campos!");
        }

        const newProduct = {
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
    }  
    
    getProducts(){
        return this.products;
    }

    getProductById(id){
        const product = this.products.find((p) => p.id === id);
        if(!product){
            console.error("Funcionamiento incorrecto");
        }
        return product;
    }
}
