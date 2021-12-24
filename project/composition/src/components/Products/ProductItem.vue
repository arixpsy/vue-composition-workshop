<script setup lang="ts">
import { NCard, NTag, NSpace, NGradientText } from 'naive-ui'
import { defineProps, withDefaults } from 'vue'
import { ProductProp } from '@/types/products'

interface Props {
	item: ProductProp
}

const props = withDefaults(defineProps<Props>(), {
	item: () => ({
		id: 0,
		name: 'Product Name',
		description: 'Product Description',
		price: 0,
		brand: 'Product Brand',
		category: ['Product Category'],
	}),
})
</script>

<template>
	<NCard :title="props.item.name">
		<NSpace>
			<NTag type="info" round>{{ props.item.brand }}</NTag>
			<NTag
				type="warning"
				round
				v-for="category in props.item.category"
				v-bind:key="category"
				>{{ category }}</NTag
			>
		</NSpace>
		<p>{{ props.item.description }}</p>
		<NGradientText type="success" size="25"
			>${{ props.item.price }}</NGradientText
		>
	</NCard>
</template>

<style scoped>
p {
	display: -webkit-box;
	overflow: hidden;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
.n-card {
  height: 100%;
}
</style>
