<script setup lang="ts">
import { ref } from 'vue'
import { NSpace, NSpin } from 'naive-ui'
import {
  ProductSearchInput,
  ProductList,
  ProductFilter,
} from './components/Products'
import Page from '@/components/Commons/Page.vue'

const searchTerm = ref('')
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
