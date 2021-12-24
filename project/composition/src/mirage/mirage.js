import { Server } from "miragejs"
import { categories, brands, products} from './data'
new Server({
  routes() {
    this.namespace = "api"

    this.get("/categories", () => {
      return { categories }
    })

    this.get("/brands", () => {
      return { brands }
    })

    this.get("/products", (schema, { queryParams }) => {
      const { search, brand, category }  = queryParams
      let filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
      if (brand) {
        filteredProducts = filteredProducts.filter(product => brand.includes(product.brand))
      }
      if (category) {
        filteredProducts = filteredProducts.filter(product => category.includes(product.category))
      }
      return {
        products: filteredProducts
      }
    })
  },
})
