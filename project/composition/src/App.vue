<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { NSpace, NSpin } from 'naive-ui'
import {
	ProductSearchInput,
	ProductList,
	ProductFilter,
} from './components/Products'
import Page from '@/components/Commons/Page.vue'
import useProducts from '@/composables/useProducts'
import useFilters from '@/composables/useFilters'

const { products, getProducts, isLoadingProducts } = useProducts()
const { brand, category, resetFilter } = useFilters()

const searchTerm = ref('')

const handleSearch = () =>
	getProducts(searchTerm.value, brand.value, category.value)

onMounted(handleSearch)

watch([brand, category], handleSearch)
</script>

<template>
	<Page>
		<NSpace vertical align="center">
			<img src="./assets/logo.png" alt="logo" />
			<ProductSearchInput
				v-model:searchTerm="searchTerm"
				@triggerSearch="handleSearch"
			/>
			<ProductFilter
				v-model:brand="brand"
				v-model:category="category"
				@resetFilter="resetFilter"
			/>
		</NSpace>

		<NSpace v-if="isLoadingProducts" vertical align="center">
			<NSpin />
		</NSpace>
		<ProductList v-else :items="products" />
	</Page>
</template>
