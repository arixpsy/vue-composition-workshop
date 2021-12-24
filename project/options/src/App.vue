<template>
	<Page>
		<NSpace vertical align="center">
			<img src="./assets/logo.png" alt="logo" />
			<ProductSearchInput
				v-model:searchTerm="searchTerm"
				@triggerSearch="handleSearch"
			/>
			<ProductFilter
				:v-model:brand="brand"
				@update:brand="setBrand"
				:v-model:category="category"
				@update:category="setCategory"
				@resetFilter="resetFilter"
			/>
		</NSpace>

		<NSpace v-if="isLoadingProducts" vertical align="center">
			<NSpin />
		</NSpace>
		<ProductList v-else :items="products" />
	</Page>
</template>

<script>
import { NSpace, NSpin } from 'naive-ui'
// import {
//   ProductSearchInput,
//   ProductList,
//   ProductFilter,
// } from './components/Products'
import Page from '@/components/Commons/Page.vue'

export default {
  components: {
    NSpace, NSpin, Page
  },
  data() {
    return {
      searchTerm: '',
      products: [],
      isLoadingProducts: true,
      brand: null,
      category: null,
    }
  },
  mounted() {
    this.handleSearch()
  },
  watch: {
    brand: function() {
      this.handleSearch()
    },
    category: function() {
      this.handleSearch()
    }
   },
  methods: {
    handleSearch: async function () {
      await this.getProducts(this.searchTerm, brand.value, category.value)
    },
    getProducts: async function () {
      this.isLoadingProducts = true
      return null
    },
    setBrands: function () {
      return null
    },
    resetFilter() {
      return null
    }
  }
 }
</script>