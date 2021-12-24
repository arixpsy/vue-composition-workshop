import { ref } from "vue"
import { ProductProp } from "@/types/products"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useProducts() {
	const products = ref<Array<ProductProp>>([])
	const isLoadingProducts = ref<boolean>(false)

	const getProducts = async (
		searchTerm: string,
		brands: Array<string>,
		categories: Array<string>
	): Promise<Array<ProductProp>> => {
		isLoadingProducts.value = true
		const res = await fetch(
			`/api/products?search=${searchTerm}&brand=${brands}&category=${categories}`
		)
		const body = await res.json()
		products.value = body.products
		isLoadingProducts.value = false
		return body.products
	}

	const brands = ref<Array<string>>([])
	const isLoadingBrands = ref<boolean>(false)

	const getBrands = async (): Promise<Array<string>> => {
		isLoadingBrands.value = true
		const res = await fetch(`/api/brands?`)
		const body = await res.json()
		brands.value = body.brands
		isLoadingBrands.value = false
		return body.brands
	}

	const categories = ref<Array<string>>([])
	const isLoadingCategories = ref<boolean>(false)

	const getCategories = async (): Promise<Array<ProductProp>> => {
		isLoadingCategories.value = true
		const res = await fetch(`/api/categories`)
		const body = await res.json()
		categories.value = body.categories
		isLoadingCategories.value = false
		return body.categories
	}

	return {
		isLoadingProducts,
		products,
		getProducts,
		brands,
		getBrands,
		categories,
		getCategories,
	}
}
