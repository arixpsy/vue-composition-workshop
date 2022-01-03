<template>
	<NGrid y-gap="20" x-gap="20" :cols="4" responsive="self">
		<NGi v-for="item in items" v-bind:key="item.id">
			<ProductItem :item="item" />
		</NGi>
	</NGrid>
</template>

<script>
import { NGrid, NGi } from 'naive-ui'
import ProductItem from "./ProductItem.vue"

export default {
	components: {
		NGrid,
		NGi,
    ProductItem,
	},
	props: {
		items: Array,
	},
}
</script>
