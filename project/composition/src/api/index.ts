import { ProductProp } from '@/types/products'

const getProducts = async (
	searchTerm: string,
	brands: Array<string>,
	categories: Array<string>
): Promise<Array<ProductProp>> => {
	const res = await fetch(
		`/api/products?search=${searchTerm}&brand=${brands}&category=${categories}`
	)
	const body = await res.json()
	return body.products
}

const getBrands = async (): Promise<Array<string>> => {
  const res = await fetch(`/api/brands?`)
  const body = await res.json()
  return body.brands
}

const getCategories = async (): Promise<Array<string>> => {
  const res = await fetch(`/api/categories`)
  const body = await res.json()
  return body.categories
}


export default {
  getProducts,
  getBrands,
  getCategories
}