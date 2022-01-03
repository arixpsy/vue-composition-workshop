<script setup lang="ts">
import { NGrid, NGi } from "naive-ui"
import ProductItem from "./ProductItem.vue"
import { ProductProp } from '@/types/products'
import { defineProps, withDefaults } from "vue"

interface Props {
	items: Array<ProductProp>
}

const props = withDefaults(defineProps<Props>(), {
	items: () => [],
})
</script>
<template>
	<NGrid y-gap="20" x-gap="20" cols="1 768:2 900:3 1200:4" responsive="self">
		<NGi v-for="item in props.items" v-bind:key="item.id">
			<ProductItem :item="item"/>
		</NGi>
	</NGrid>
</template>
