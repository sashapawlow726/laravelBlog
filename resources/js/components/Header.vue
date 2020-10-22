<template>
	<ul class="nav justify-content-end">
		<li class="nav-item" v-for="(link, idx) in links" :key="idx">
			<router-link class="nav-link active" :to="link.href">{{ link.title }}</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				links: [
					{
						title: 'Главная',
						href: '/' 
					},
					{
						title: 'Блог',
						href: '/blog' 
					}
				]
			}
		}
	}

</script>