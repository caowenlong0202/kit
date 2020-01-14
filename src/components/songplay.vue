<template>
	<div class="songplay">
		<van-nav-bar title="音乐播放" left-text="返回" @click-left="onClickLeft" />
		<div class="main">
			<div class="playbtn">
				<aplayer :autoplay="true" v-if="isShow" :music="{src: this.songurl}" />
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import aplayer from 'vue-aplayer'
	export default {
		name: 'songplay',
		components: {
            aplayer
        },
		data() {
			return {
				apiurl: "https://u.y.qq.com/",
				songmid: "",
				playicon: true,
				pauseicon: false,
				songurl:"",
				isShow:false
			}
		},
		created() {
			this.songmid = sessionStorage.getItem("songmid")
			this.getSipPurl()
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1)
			},
			getSipPurl() {
				axios.get(this.apiurl + 'cgi-bin/musicu.fcg?format=json&data=%7B%22req_0%22%3A%7B%22module%22%3A%22vkey.GetVkeyServer%22%2C%22method%22%3A%22CgiGetVkey%22%2C%22param%22%3A%7B%22guid%22%3A%22358840384%22%2C%22songmid%22%3A%5B%22' + this.songmid + '%22%5D%2C%22songtype%22%3A%5B0%5D%2C%22uin%22%3A%221443481947%22%2C%22loginflag%22%3A1%2C%22platform%22%3A%2220%22%7D%7D%2C%22comm%22%3A%7B%22uin%22%3A%2218585073516%22%2C%22format%22%3A%22json%22%2C%22ct%22%3A24%2C%22cv%22%3A0%7D%7D')
					.then((res) => {
						console.log(res)
						this.sip = res.data.req_0.data.sip[0]
						this.purl = res.data.req_0.data.midurlinfo[0].purl
						this.songurl = this.sip + this.purl
						this.isShow = true
					})
			},
		}
	}
</script>

<style>
	.playbtn {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
	}
</style>