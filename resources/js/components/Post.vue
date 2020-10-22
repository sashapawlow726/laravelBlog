<template>
	<div class="card border-light mb-3" style="max-width: 18rem;">
			<div class="card-header">{{ title }}</div>
			<div class="card-body">
				<h5 class="card-title"> {{ title }} </h5>
				<p class="card-text">{{ body }}</p>
			</div>
		</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ""
			},
			body: {
				type: String,
				default: ""
			}
		},
		data() {
			return {

			}
		}
	}

</script>