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
import {
  ProductSearchInput,
  ProductList,
  ProductFilter,
} from './components/Products'
import Page from '@/components/Commons/Page.vue'
import api from '@/api'

export default {
  components: {
    NSpace, NSpin, Page, ProductSearchInput, ProductList, ProductFilter
  },
  data() {
    return {
      searchTerm: '',
      products: [],
      isLoadingProducts: true,
      brand: [],
      category: [],
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
      await this.getProducts(this.searchTerm, this.brand, this.category)
    },
    getProducts: async function (searchTerm, brand, category) {
      this.isLoadingProducts = true
      this.products = await api.getProducts(searchTerm, brand, category)
      this.isLoadingProducts = false
    },
    setBrand: function (brands) {
      this.brand = brands
    },
    setCategory: function (categories) {
      this.category = categories
    },
    resetFilter() {
      this.brand = []
      this.category = []
    }
  }
 }
</script>