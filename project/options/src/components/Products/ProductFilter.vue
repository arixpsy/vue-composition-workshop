<template>
	<NCard title="Filters">
		<template #header-extra>
			<n-text strong @click="resetFilter" class="hover-pointer">Reset</n-text>
		</template>
		<NCollapse arrow-placement="right">
			<NCollapseItem title="Brands" name="1">
				<div v-for="brand in brands" v-bind:key="brand">
					<input
						v-model="brandInput"
						type="checkbox"
						:id="brand"
						:value="brand"
						@change="$emit('update:brand', brandInput)"
					/>
					<label :for="brand">{{ brand }}</label>
				</div>
			</NCollapseItem>
			<NCollapseItem title="Categories" name="2">
				<div v-for="category in categories" v-bind:key="category">
					<input
						v-model="categoryInput"
						type="checkbox"
						:id="category"
						:value="category"
						@change="$emit('update:category', categoryInput)"
					/>
					<label :for="category">{{ category }}</label>
				</div>
			</NCollapseItem>
		</NCollapse>
	</NCard>
</template>

<script>
import { NCard, NCollapse, NCollapseItem, NText } from 'naive-ui'
import api from '@/api'

export default {
	components: {
		NCard,
		NCollapse,
		NCollapseItem,
		NText,
	},
	data() {
		return {
			brandInput: [],
			categoryInput: [],
			brands: [],
			categories: [],
		}
	},
	methods: {
		resetFilter() {
			this.brandInput = []
			this.categoryInput = []
			this.$emit('resetFilter')
		},
	},
	async mounted() {
		this.brands = await api.getBrands()
		this.categories = await api.getCategories()
	},
}
</script>

<style scoped>
.n-card {
	width: 600px;
	margin: 20px 0;
}
.hover-pointer:hover {
	cursor: pointer;
	color: royalblue;
}
</style>
