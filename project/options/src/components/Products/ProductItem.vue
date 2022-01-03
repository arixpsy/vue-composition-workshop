<template>
	<NCard :title="item.name">
		<NSpace>
			<NTag type="info" round>{{ item.brand }}</NTag>
			<NTag
				type="warning"
				round
				v-for="category in item.category"
				v-bind:key="category"
				>{{ category }}</NTag
			>
		</NSpace>
		<p>{{ item.description }}</p>
		<NGradientText type="success" size="25"
			>${{ item.price }}</NGradientText
		>
	</NCard>
</template>

<script>
import { NCard, NTag, NSpace, NGradientText } from 'naive-ui'
export default {
	components: {
		NCard,
		NTag,
		NSpace,
		NGradientText,
	},
	props: {
		item: Object,
	},
}
</script>

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
