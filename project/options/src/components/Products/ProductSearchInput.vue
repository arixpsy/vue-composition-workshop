<template>
	<form @submit.prevent="$emit('triggerSearch')">
		<NInputGroup>
			<NInput
				v-model:value="input"
				@input="$emit('update:searchTerm', $event)"
				size="large"
				round
				clearable
				placeholder="Look for a item"
			/>
			<NButton @click="$emit('triggerSearch')" round size="large"
				>Search</NButton
			>
		</NInputGroup>
	</form>
</template>

<script>
import { NButton, NInput, NInputGroup } from 'naive-ui'

export default {
	components: {
		NButton,
		NInput,
		NInputGroup,
	},
	data() {
		return {
			input: '',
		}
	},
}
</script>

<style scoped>
.n-input-group {
	width: 600px;
}
</style>
