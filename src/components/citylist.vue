<template>
	<div class="city">
		<van-nav-bar title="城市选择" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
		<van-index-bar>
			<van-index-anchor index="A" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />

			<van-index-anchor index="B" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			
			<van-index-anchor index="C" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-index-anchor index="D" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-index-anchor index="E" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-index-anchor index="F" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
		</van-index-bar>
	</div>
</template>

<script>
	export default {
		name: 'city',
		data() {
			return {

			}
		},
		methods: {
			onClickLeft() {
				Toast('返回');
			},
			onClickRight() {
				Toast('按钮');
			}
		}
	}
</script>

<style scoped>

</style>