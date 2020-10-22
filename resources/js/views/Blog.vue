<template>
	<div>
				<h1>Blog</h1>
				<post v-for="(post, idx) in posts" :title="post.title" :body="post.body" :key="idx"></post>
		
	</div>
</template>

<script>
import axios from 'axios'
import Post from '../components/Post'

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
				],
				posts: []
			}
		},
		components: {
			Post
		},
		mounted() {
			this.loadPosts()
		},
		methods: {
				loadPosts() {
					axios
						.get('/api/posts')
						.then(response => {
							this.posts = response.data;
							console.log(response);
					})
					.catch(error => console.log(error));
				}
			}
	}

</script>

