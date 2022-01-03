import { ref } from 'vue'
import { ProductProp } from '@/types/products'
import api from '@/api'

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
		const data = await api.getProducts(searchTerm, brands, categories)
		products.value = data
		isLoadingProducts.value = false
		return data
	}

	const brands = ref<Array<string>>([])
	const isLoadingBrands = ref<boolean>(false)

	const getBrands = async (): Promise<Array<string>> => {
		isLoadingBrands.value = true
		const data = await api.getBrands()
		brands.value = data
		isLoadingBrands.value = false
		return data
	}

	const categories = ref<Array<string>>([])
	const isLoadingCategories = ref<boolean>(false)

	const getCategories = async (): Promise<Array<string>> => {
		isLoadingCategories.value = true
		const data = await api.getCategories()
		categories.value = data
		isLoadingCategories.value = false
		return data
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
