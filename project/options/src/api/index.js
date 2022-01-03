const getProducts = async (searchTerm, brands, categories) => {
	const res = await fetch(
		`/api/products?search=${searchTerm}&brand=${brands}&category=${categories}`
	)
	const body = await res.json()
	return body.products
}

const getBrands = async () => {
	const res = await fetch(`/api/brands?`)
	const body = await res.json()
	return body.brands
}

const getCategories = async () => {
	const res = await fetch(`/api/categories`)
	const body = await res.json()
	return body.categories
}

export default {
	getProducts,
	getBrands,
	getCategories,
}
