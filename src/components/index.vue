<template>
	<div class="grid">
		<van-nav-bar title="功能列表" />
	<div class="main">
		<van-grid>
			<router-link to="/face"><van-grid-item icon="scan" text="人脸检测" /></router-link>
			<router-link to="/music"><van-grid-item icon="music-o" text="音乐" /></router-link>
			<router-link to="/map"><van-grid-item icon="location-o" text="地图" /></router-link>
			<van-grid-item icon="photo-o" text="文字" />
			<van-grid-item icon="photo-o" text="文字" />
			<van-grid-item icon="photo-o" text="文字" />
			<van-grid-item icon="photo-o" text="文字" />
			<van-grid-item icon="photo-o" text="文字" />
		</van-grid>
	</div>
	</div>
</template>

<script>
	export default {
		name: 'grid',
		data() {
			return {
				
			}
		},
		created() {
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.main {
		width: 88%;
		margin:10px auto 0;
	}
	.van-grid a{
		width: 25%;
	}
</style>