<script setup lang="ts">
import { onMounted, ref, defineEmits } from 'vue'
import { NCard, NCollapse, NCollapseItem, NText } from 'naive-ui'
import useProducts from '@/composables/useProducts'

const { brands, getBrands, categories, getCategories } = useProducts()
const brandInput = ref<Array<string>>([])
const categoryInput = ref<Array<string>>([])
const emit = defineEmits(['resetFilter'])

const resetFilter = () => {
  brandInput.value = []
  categoryInput.value = []
  emit('resetFilter')
}

onMounted(() => {
	getBrands()
	getCategories()
})
</script>
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
