import { ref } from "vue"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useFilters() {
	const brand = ref<Array<string>>([])
	const category = ref<Array<string>>([])

	const setBrand = (brands: Array<string>) => {
		brand.value = brands
	}

	const setCategory = (categories: Array<string>) => {
		category.value = categories
	}

	const resetFilter = () => {
		brand.value = []
		category.value = []
	}

	return {
		brand,
		setBrand,
		category,
		setCategory,
		resetFilter,
	}
}
