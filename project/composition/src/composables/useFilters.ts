import { ref } from "vue"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useFilters() {
	const brand = ref<Array<string>>([])
	const category = ref<Array<string>>([])

	const resetFilter = () => {
		brand.value = []
		category.value = []
	}

	return {
		brand,
		category,
		resetFilter,
	}
}
